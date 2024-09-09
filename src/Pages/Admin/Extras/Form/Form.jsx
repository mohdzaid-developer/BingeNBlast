import "./Form.scss";
import {toast} from "react-hot-toast";

// MUi
import { Box, Modal } from "@mui/material";

// Redux
import { useSelector, useDispatch } from "react-redux";

//State Slice
import {
  handleFormClose,
  setFormData,
  setEditItem,
} from "../../../../Redux/Slices/Admin/State/formSlice";

//API Slice
import {
  useAddCakeMutation,
  useEditCakeMutation,
  useAddDecorationMutation,
  useEditDecorationMutation,
  useAddAddonMutation,
  useEditAddonMutation,
  useImageUploadMutation,
} from "../../../../Redux/Slices/Admin/Api/apiSlice";

const Form = () => {
  const dispatch = useDispatch();

  const path = useSelector((state) => state.form.path);
  const open = useSelector((state) => state.form.open);
  const title = useSelector((state) => state.form.title);
  const formData = useSelector((state) => state.form.formData);
  const id = useSelector((state) => state.form.id);
  const isEdit = useSelector((state) => state.form.isEdit);

  const [addCake] = useAddCakeMutation();
  const [addDecoration] = useAddDecorationMutation();
  const [addAddon] = useAddAddonMutation();
  const [editCake] = useEditCakeMutation();
  const [editDecoration] = useEditDecorationMutation();
  const [editAddon] = useEditAddonMutation();

  //Popup
  const handleCloseModal = () => {
    dispatch(handleFormClose());
    dispatch(setEditItem(false));
    dispatch(setFormData({ itemsName: "", details: "", price: "" }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormData({ [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (path === "/admin/cakes") {
      const response = await addCake(formData);
      if (response.data) {
        toast.success("Added Successfully!");
        handleCloseModal();
        dispatch(setFormData({ itemsName: "", details: "", price: "" }));
        dispatch(setEditItem(false));
      }
      if (response.error) {
        toast.error(response.error.data.errors[0].message);
      }
    }
    if (path === "/admin/decorations") {
      const response = await addDecoration(formData);
      if (response.data) {
        toast.success("Added Successfully!");
        handleCloseModal();
        dispatch(setFormData({ itemsName: "", details: "", price: "" }));
        dispatch(setEditItem(false));
      }
      if (response.error) {
        toast.error(response.error.data.errors[0].message);
      }
    }
    if (path === "/admin/add-ons") {
      const response = await addAddon(formData);
      if (response.data) {
        toast.success("Added Successfully!");
        handleCloseModal();
        dispatch(setFormData({ itemsName: "", details: "", price: "" }));
        dispatch(setEditItem(false));
      }
      if (response.error) {
        toast.error(response.error.data.errors[0].message);
      }
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    if (path === "/admin/cakes") {
      const cake = { ...formData, itemType: "CAKE", uid: id };
      const response = await editCake(cake);
      if (response.data) {
        toast.success("Edited Successfully!");
        handleCloseModal();
        dispatch(setFormData({ itemsName: "", details: "", price: "" }));
        dispatch(setEditItem(false));
      }
      if (response.error) {
        toast.error(response.error.data.errors[0].message);
      }
    }
    if (path === "/admin/decorations") {
      const cake = { ...formData, itemType: "DECORATION", uid: id };
      const response = await editDecoration(cake);
      if (response.data) {
        toast.success("Edited Successfully!");
        handleCloseModal();
        dispatch(setFormData({ itemsName: "", details: "", price: "" }));
        dispatch(setEditItem(false));
      }
      if (response.error) {
        toast.error(response.error.data.errors[0].message);
      }
    }
    if (path === "/admin/add-ons") {
      const cake = { ...formData, itemType: "ADD_ON" ,uid:id};
      const response = await editAddon(cake);
      if (response.data) {
        toast.success("Edited Successfully!");
        handleCloseModal();
        dispatch(setFormData({ itemsName: "", details: "", price: "" }));
        dispatch(setEditItem(false));
      }
      if (response.error) {
        toast.error(response.error.data.errors[0].message);
      }
    }
  };

  const [imageUpload] = useImageUploadMutation();
  const handleFileChange = async (event) => {
    const formsData = new FormData();
    formsData.append("image", event.target.files[0]);
    const res = await imageUpload({ formsData, uid: id });
  };

  return (
    <div className="form">
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="form-box">
          <h2>{title}</h2>
          <div className="form">
            <input
              type="text"
              placeholder="Name"
              onChange={handleChange}
              value={formData.itemsName}
              name="itemsName"
            />
            <input
              type="text"
              placeholder="Description"
              onChange={handleChange}
              value={formData.details}
              name="details"
            />
            <input
              type="text"
              placeholder="Price"
              onChange={handleChange}
              value={formData.price}
              name="price"
            />
            {isEdit ? <input type="file" onChange={handleFileChange} /> : ""}
          </div>
          <div className="buttons" onClick={isEdit ? handleEdit : handleSubmit}>
            <button>{isEdit ? "Edit" : "Save"}</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Form;
