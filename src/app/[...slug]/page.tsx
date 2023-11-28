import Frame from "../../components/frame/Frame";
import swagPhotos, { Photo } from "../../photos";

export default function PhotoPage({
  params: { slug },
}: {
  params: { slug: string[] };
}) {
  const id = slug.length > 1 ? slug[1] : slug[0].slice("photos".length);
  const photo: Photo = swagPhotos.find((p) => p.id === id)!;

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
        <Frame photo={photo} />
      </div>
    </div>
  );
}
