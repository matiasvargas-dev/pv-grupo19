import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Acción para obtener productos de la API
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Error al cargar los productos");
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [], // Lista de productos
    favorites: [], // Lista de productos favoritos
    loading: false, // Estado de carga
    error: null, // Estado de error
    lastRemovedFavorite: null, // Para la funcionalidad de undo
  },
  reducers: {
    // Reducer para alternar el estado de favorito de un producto
    toggleFavorite: (state, action) => {
      const id = action.payload;
      if (state.favorites.includes(id)) {
        // Si está en favoritos, lo removemos y guardamos para undo
        state.favorites = state.favorites.filter((favId) => favId !== id);
        state.lastRemovedFavorite = id;
      } else {
        // Si no está en favoritos, lo agregamos
        state.favorites.push(id);
        state.lastRemovedFavorite = null; // Limpiamos el undo
      }
    },

    // Nuevo reducer para deshacer la última acción de remover favorito
    undoRemoveFavorite: (state) => {
      if (
        state.lastRemovedFavorite &&
        !state.favorites.includes(state.lastRemovedFavorite)
      ) {
        state.favorites.push(state.lastRemovedFavorite);
        state.lastRemovedFavorite = null;
      }
    },

    // Limpiar el historial de undo (útil cuando se navega a otra página)
    clearUndoHistory: (state) => {
      state.lastRemovedFavorite = null;
    },

    // Limpiar errores
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        let newProduct = action.payload;
        const idExists = state.items.some((item) => item.id === newProduct.id);
        if (idExists || newProduct.id === undefined || newProduct.id === null) {
          // Buscar el id máximo actual y sumar 1
          const maxId = state.items.reduce((max, item) =>
            typeof item.id === "number" && item.id > max ? item.id : max, 0
          );
          newProduct = {
            ...newProduct,
            id: maxId + 1,
          };
        }
        state.items.push(newProduct);
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error desconocido";
      })
      .addCase(updateProductAsync.fulfilled, (state, action) => {
        const updated = action.payload;
        state.items = state.items.map((product) =>
          product.id === updated.id ? { ...product, ...updated } : product,
        );
      })
      .addCase(updateProductAsync.rejected, (state, action) => {
        state.error = action.payload || "Error al actualizar el producto";
      })
      .addCase(deleteProductAsync.fulfilled, (state, action) => {
        const deletedId = action.payload.id;
        state.items = state.items.filter((product) => product.id !== deletedId);
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteProductAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error al eliminar el producto";
      });
  },
});

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (nuevoProducto, { rejectWithValue }) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoProducto),
      });
      if (!response.ok) {
        throw new Error("Error al crear el producto");
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// Acción asincrona para editar un producto en la API y actualizar el store
export const updateProductAsync = createAsyncThunk(
  "products/updateProductAsync",
  async (updatedProduct, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${updatedProduct.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
        },
      );
      if (!response.ok) {
        throw new Error("Error al actualizar el producto");
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// Acción asincrona para eliminar un producto en la API y actualizar el store
export const deleteProductAsync = createAsyncThunk(
  "products/deleteProductAsync",
  async (id, { rejectWithValue }) => {
    // Si el producto es "local" (id string o mayor a 20), lo eliminamos solo del store
    if (typeof id === "string" || id > 20) {
      return { id };
    }
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Error al eliminar el producto");
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const {
  toggleFavorite,
  undoRemoveFavorite,
  clearUndoHistory,
  clearError,
} = productSlice.actions;

export default productSlice.reducer;
