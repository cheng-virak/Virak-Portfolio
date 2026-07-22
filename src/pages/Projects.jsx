import CardProject from "../commponants/CardProject";
import cShopImage from '../assets/image.png';

function Projects(){
    return (
        <div className="page-section container text-center">
            <h1>Projects</h1>
            <p>A selection of projects I have built.</p>
            <div className="projects-grid mt-4">
                <CardProject
                    title="C-Shop"
                    description="An online clothing store interface with featured products and promotional offers."
                    imageUrl={cShopImage}
                />
            </div>
        </div>
        
    );
}

export default Projects
