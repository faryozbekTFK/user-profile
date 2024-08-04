import { useState } from "react";
import { useQuery } from "react-query";
import { getUser } from "../../services/axiosPublic";
import user_image from "../../assets/images/user-image.png";
import EditUser from "../../layers/edit-user/EditUser";
import Modal from "../../components/modal/Modal";
import { Skeleton } from "@mui/material";

function UserProfile(): JSX.Element {
  const [openModal, setOpenModal] = useState({ open: false });

  const handleOpenModal = () => setOpenModal({ open: true });
  const handleCloseModal = () => setOpenModal({ open: false });

  const {
    data: user,
    isLoading,
    refetch,
  } = useQuery("profile", getUser, { refetchOnWindowFocus: false });

  return (
    <>
      <Modal open={openModal?.open} onClose={handleCloseModal}>
        <EditUser user={user} onSave={refetch} onClose={handleCloseModal} />
      </Modal>
      <div className="w-full h-[100dvh] bg-slate-300 flex items-center justify-center p-4">
        <div className="w-[60rem] bg-slate-400 rounded-xl flex flex-col md:flex-row text-center md:text-start items-center px-6 py-8 relative">
          <div className="absolute top-4 right-4">
            <button
              onClick={handleOpenModal}
              className="bg-orange-300 uppercase text-xs px-2 py-1 rounded"
            >
              Edit User
            </button>
          </div>

          <div className="w-[10rem] h-[10rem] flex-2 bg-slate-500 rounded-full flex items-center justify-center relative">
            {isLoading ? (
              <Skeleton variant="circular" width={120} height={120} />
            ) : (
              <img
                src={user_image}
                alt="Profile-photo"
                className="w-full h-full"
              />
            )}
            <button className="w-6 h-6 bg-red-400 rounded-full absolute bottom-3 right-3 text-sm flex items-center justify-center">
              🖋️
            </button>
          </div>

          <div className="pl-4 flex-1 flex flex-col">
            {isLoading ? (
              <Skeleton animation="wave" width={300} height={40} />
            ) : (
              <p className="text-4xl uppercase font-bold">{user?.name}</p>
            )}

            {isLoading ? (
              <Skeleton animation="wave" width={300} height={40} />
            ) : (
              <p className="py-2">{user?.email}</p>
            )}

            {isLoading ? (
              <Skeleton animation="wave" width={500} height={40} />
            ) : (
              <i className="text-sm font-thin">{user?.bio}</i>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
