import React from "react";
import KulabuHome from "../components/KulabuComponents/KulabuHome";
import Benefits from "../components/KulabuComponents/Benefits";
import Tiers from "../components/KulabuComponents/Tiers";
import Registration from "../components/KulabuComponents/Registration";
import Testimonials from "../components/KulabuComponents/Testimonials";

const Kulabu = () => {
  return (
    <div>
      <KulabuHome />
      <Benefits />
      <Tiers />
      <Registration />
      <Testimonials />
    </div>
  );
};

export default Kulabu;
