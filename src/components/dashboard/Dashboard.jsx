import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Paper,
  IconButton,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Add, Edit, Delete, Cancel, Save } from "@mui/icons-material";

const API_URL = "http://localhost:5000/api/gallery";

const initialForm = {
  images: "",
  qr_code: "",
  title: "",
  description: "",
  category: "",
  size: "",
  price: "",
  sku: "",
  orientation: "",
  artist_name: "",
  upload_date: "",
};

export default function Dashboard() {
  const [gallery, setGallery] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);
  const [open, setOpen] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // Fetch all gallery items
  useEffect(() => {
    fetchGallery();
  }, []);
  const fetchGallery = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setGallery(data);
  };

  // Handle text input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle file input changes
  const handleFileChange = (e) => {
    setForm({ ...form, images: Array.from(e.target.files) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload;
    let isFileUpload =
      Array.isArray(form.images) &&
      form.images.length > 0 &&
      form.images[0] instanceof File;
    try {
      if (isFileUpload) {
        payload = new FormData();
        Object.entries(form).forEach(([key, value]) => {
          if (key === "images") {
            value.forEach((file) => payload.append("images", file));
          } else {
            payload.append(key, value);
          }
          
        });

        // Add this fetch options for file upload
        const fetchOptions = {
          method: editingId ? "PUT" : "POST",
          body: payload,
        };

        const url = editingId ? `${API_URL}/${editingId}` : API_URL;
        await fetch(url, fetchOptions);
      } else {
        payload = {
          ...form,
          images: form.images ? JSON.parse(form.images) : [],
          price: form.price ? parseFloat(form.price) : 0,
          upload_date: form.upload_date || null,
        };

        const fetchOptions = {
          method: editingId ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        };
        const url = editingId ? ` ${API_URL}/${editingId}` : API_URL;
        await fetch(url, fetchOptions);
      }

      setSnackbar({
        open: true,
        message: editingId ? "Updated successfully!" : "Added successfully!",
        severity: "success",
      });
      setForm(initialForm);
      setEditingId(null);
      setOpen(false);
      fetchGallery();
    } catch (err) {
      console.error("Error:", err);
      setSnackbar({
        open: true,
        message: "Error occurred!" + err.message,
        severity: "error",
      });
    }
  };

  const handleEdit = (item) => {
    setForm({
      ...item,
      images: JSON.stringify(item.images), // keep as string for edit
      price: item.price,
      upload_date: item.upload_date ? item.upload_date.slice(0, 16) : "",
    });
    setEditingId(item.id);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setSnackbar({
      open: true,
      message: "Deleted successfully!",
      severity: "success",
    });
    fetchGallery();
  };

  const handleAdd = () => {
    setForm(initialForm);
    setEditingId(null);
    setOpen(true);
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "images",
      headerName: "Images",
      width: 120,
      renderCell: (params) => (
        <span style={{ wordBreak: "break-all" }}>
          {JSON.stringify(params.value)}
        </span>
      ),
    },
    { field: "qr_code", headerName: "QR Code", width: 100 },
    { field: "title", headerName: "Title", width: 120 },
    { field: "description", headerName: "Description", width: 150 },
    { field: "category", headerName: "Category", width: 100 },
    { field: "size", headerName: "Size", width: 80 },
    { field: "price", headerName: "Price", width: 80 },
    { field: "sku", headerName: "SKU", width: 100 },
    { field: "orientation", headerName: "Orientation", width: 100 },
    { field: "artist_name", headerName: "Artist Name", width: 120 },
    {
      field: "upload_date",
      headerName: "Upload Date",
      width: 140,
      valueFormatter: (params) =>
        params && params.value
          ? String(params.value).replace("T", " ").slice(0, 16)
          : "",
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      renderCell: (params) => (
        <Stack direction="row" spacing={1}>
          <IconButton color="primary" onClick={() => handleEdit(params.row)}>
            <Edit />
          </IconButton>
          <IconButton color="error" onClick={() => handleDelete(params.row.id)}>
            <Delete />
          </IconButton>
        </Stack>
      ),
    },
  ];
  return (
    <Box sx={{ maxWidth: 1500, mx: "auto", p: 3 }}>
      <Typography variant="h4" gutterBottom className="pt-20 ">
        Gallery Dashboard
      </Typography>
      <Button
        variant="contained"
        startIcon={<Add />}
        onClick={handleAdd}
        sx={{ mb: 2 }}
      >
        Add New
      </Button>
      <Paper elevation={3} sx={{ height: 700, width: "100%", mb: 3 }}>
        <DataGrid
          rows={gallery}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[7, 14, 21]}
          disableSelectionOnClick
        />
      </Paper>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          {editingId ? "Edit Gallery Item" : "Add Gallery Item"}
        </DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <label style={{ display: "block", marginBottom: 8 }}>
                  Images (upload one or more):
                </label>
                <input
                  type="file"
                  name="images"
                  multiple
                  accept="image/*"
                  onChange={handleFileChange}
                  required={!editingId}
                />
                {Array.isArray(form.images) && form.images.length > 0 && (
                  <div style={{ fontSize: 12, marginTop: 4 }}>
                    {form.images.map((file, idx) => (
                      <span key={idx}>
                        {file.name}
                        {idx < form.images.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </div>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="QR Code"
                  name="qr_code"
                  value={form.qr_code}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Title"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Description"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Category"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Size"
                  name="size"
                  value={form.size}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Price"
                  name="price"
                  type="number"
                  value={form.price}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="SKU"
                  name="sku"
                  value={form.sku}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Orientation"
                  name="orientation"
                  value={form.orientation}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Artist Name"
                  name="artist_name"
                  value={form.artist_name}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Upload Date"
                  name="upload_date"
                  type="datetime-local"
                  value={form.upload_date}
                  onChange={handleChange}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>
            <DialogActions sx={{ mt: 2 }}>
              <Button startIcon={<Save />} type="submit" variant="contained">
                {editingId ? "Update" : "Add"}
              </Button>
              <Button
                startIcon={<Cancel />}
                onClick={() => {
                  setForm(initialForm);
                  setEditingId(null);
                  setOpen(false);
                }}
                color="secondary"
                variant="outlined"
              >
                Cancel
              </Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
       
    </Box>
  );
}
