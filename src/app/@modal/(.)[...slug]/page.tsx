import Frame from "../../../components/frame/Frame";
import Modal from "../../../components/modal/Modal";
import swagPhotos, { Photo } from "../../../photos";

export default function PhotoModal({
  params: { slug },
}: {
  params: { slug: string[] | string };
}) {
  const id = slug.length > 1 ? slug[1] : slug[0].slice("photos".length);
  const photos = swagPhotos;
  const photo: Photo = photos.find((p) => p.id === id)!;

  return (
    <Modal>
      <Frame photo={photo} />
    </Modal>
  );
}
