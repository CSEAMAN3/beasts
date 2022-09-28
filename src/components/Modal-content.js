function ModalContent({ title, imageUrl, description, changeModal }) {
  return (
    <div className="modal-container">
      <img
        className="beast-img"
        src={imageUrl}
        alt={title}
        title={title}
        onClick={() => {
          changeModal();
        }}
      />
      <p className="beast-content">{description}</p>
    </div>
  );
}

export default ModalContent;
