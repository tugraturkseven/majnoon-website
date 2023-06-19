import Card from "../components/Card";
import kush from "../assets/tshirts/kush.png"

export default function Main() {

    return (
        <div className="grid gap-3 grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1" data-theme="cupcake">
            <Card imgSrc={kush} />
            <Card imgSrc={kush} />
            <Card imgSrc={kush} />
            <Card imgSrc={kush} />
        </div>

    )
}
