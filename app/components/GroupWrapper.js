import React from "react";
import TitleWrapper from "./TitleWrapper";
import { GroupData } from "../data/GroupData";
import GroupCard from "./GroupCard";

const GroupWrapper = () => {
  return (
    <section className="py-8">
      <div className="container m-auto">
        <TitleWrapper
          title={`Avimex Fashion & Health Group`}
          firstLine={`La marca Pura+ pertenece al grupo empresarial italiano Avimex Fashion & Health Group.`}
          secondLine={`Es actualmente líder en 4 categorias gracias a sus productos de altisima calidad y extraordinaria ecuación de valor.`}
          thirdLine={`Todos productos gozan de nuestro compromiso satisfecho o rembolsado al 100%.`}
        />

        <div className="group_wrapper gap-6 grid grid-cols-1 lg:grid-cols-2 mt-8">
          {GroupData.map((elem, index) => {
            return (
              <GroupCard
                key={index}
                icon={elem.icon}
                text={elem.text}
                desc={elem.desc}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GroupWrapper;
