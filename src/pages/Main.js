import Card from "../components/Card";

const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => {
        images[item.replace('./', '')] = r(item);
    });
    let imagesArr = [];

    Object.keys(images).map((imageName) => (
        imagesArr.push(images[imageName])
    ))
    return imagesArr;
};

const images = importAll(require.context('../assets/tshirts/', false, /\.(jpg)$/));

export default function Main() {

    return (
        <div className="grid gap-3 grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {images.map((imageName, index) => (
                <Card key={index} imgSrc={imageName} />
            ))}
        </div>

    )
}
