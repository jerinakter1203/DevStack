import './App.css'
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import technologies from "./data/technologies.json";
import TechnologyCard from "./components/TechnologyCard";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

function App() {
    const [techData, setTechData] = useState([]);
    const [selectedStack, setSelectedStack] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
  setTechData(technologies);
   setLoading(false);
}, []);

const handleAddToStack = (technology) => {
  const alreadyAdded = selectedStack.some(
    (tech) => tech.id === technology.id
  );

  if (alreadyAdded) {
  toast.warning(`${technology.name} is already in your stack!`);
  return;
}

  setSelectedStack((previousStack) => [
    ...previousStack,
    technology
  ]);
  toast.success(`${technology.name} added to your stack!`);
};
const handleRemoveFromStack = (id) => {
  const removedTech = selectedStack.find(
    (tech) => tech.id === id
  );

  setSelectedStack((previousStack) =>
    previousStack.filter((tech) => tech.id !== id)
  );

  toast.info(`${removedTech.name} removed from your stack!`);
};
const handleRemoveAll = () => {
  if (selectedStack.length === 0) {
    return;
  }

  setSelectedStack([]);
  toast.info("All technologies removed from your stack!");
};
  return (
    <>
    <ToastContainer />
      <Navbar />
      <Hero/>
     <section className="dev-stack">

  <h1>Explore the Technologies</h1>

  <p>
    Pick one technology per category to build your ideal stack.
  </p>

  <div className="stack-layout">

  {loading ? (
  <p>Loading...</p>
) : (
  <div className="technology-card-container">
    {techData.map((tech) => (
      <TechnologyCard
        key={tech.id}
        technology={tech}
        onAddToStack={handleAddToStack}
        selectedStack={selectedStack}
      />
    ))}
  </div>
)}

 <YourStack
  selectedStack={selectedStack}
  onRemove={handleRemoveFromStack}
  onRemoveAll={handleRemoveAll}
/>

</div>
</section>
<Footer />
    </>
  );
}

export default App;