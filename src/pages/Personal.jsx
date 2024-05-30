import React from "react";
import Card from "../components/Card";
import { LuMailbox } from "react-icons/lu";
import { TbCoins } from "react-icons/tb";
import { FaHandHoldingUsd } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import { LuPiggyBank } from "react-icons/lu";
import { GoHome } from "react-icons/go";
import { FaHouseLock } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";

function Personal() {
    const data = [
      {
        title: "Loans",
        icon: <FaHandHoldingUsd />,
        isNew: false,
        offer: false,
      },
      {
        title: "Credit Cards",
        icon: <CiCreditCard1 />,
        isNew: false,
        offer: false,
      },
      {
        title: "Current accounts",
        icon: <LuMailbox />,
        isNew: false,
        offer: false,
      },
      {
        title: "Overdrafts",
        icon: <TbCoins />,
        isNew: false,
        offer: false,
      },
        {
          title: "Savings",
          icon: <LuPiggyBank />,
          isNew: false,
          offer: false,
        },
        {
          title: "Life Insaurence",
          icon: <FaHandHoldingHeart />,
          isNew: false,
          offer: true,
        },
        {
          title: "Invest",
          icon: <AiOutlineStock />,
          isNew: true,
          offer: false,
        },
        {
          title: "Mortgage",
          icon: <GoHome />,
          isNew: false,
          offer: false,
        },
        {
          title: "Home Insaurence",
          icon: <FaHouseLock />,
          isNew: false,
          offer: true,
        },
    ];
  
  return (
    <>
      {data.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          isNew={item.isNew}
          icon={item.icon}
          offer={item.offer}
        />
      ))}
    </>
  );
}

export default Personal;
