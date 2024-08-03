import { Carousel } from "./Components/Carousel";
import { ExportTopBooks } from "./Components/ExploreTopBooks";
import { Heros } from "./Components/Heros";
import { LibraryServices } from "./Components/LibraryServices";

export const HomePage = () => {
    return (
        <>
            <ExportTopBooks></ExportTopBooks>
            <Carousel></Carousel>
            <Heros></Heros>
            <LibraryServices></LibraryServices>
        </>
    );
}