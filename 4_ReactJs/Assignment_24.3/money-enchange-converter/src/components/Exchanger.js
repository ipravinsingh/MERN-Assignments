import React, { useEffect, useState } from "react";
import "./Exchanger.css";
import { Card, Form, Input, Select } from "antd";

function Exchanger() {
  const apiUrl = `https://open.er-api.com/v6/latest/USD`;

  const firstSelectDefaultValue = "USD";
  const secondSelectDefaultValue = "ADE";

  const [moneyList, setMoneyList] = useState([]);
  const [inputText, setInputText] = useState("0");
  const [firstSelect, setFirstSelect] = useState(firstSelectDefaultValue);
  const [secondSelect, setSecondSelect] = useState(secondSelectDefaultValue);
  const [result, setResult] = useState("0");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(apiUrl);
    const jsonData = await response.json();
    const data = jsonData.rates;
    const tempArray = Object.entries(data).map((item) => {
      return {
        value: item[0],
        rate: item[1],
      };
    });
    setMoneyList(tempArray);
  }

  useEffect(() => {
    if (moneyList.length === 0 || !firstSelect || !secondSelect) return;

    const firstSelectRate = moneyList.find((item) => {
      return item.value === firstSelect;
    });

    const secondSelectRate = moneyList.find((item) => {
      return item.value === secondSelect;
    });

    if (!firstSelectRate || !secondSelectRate) {
      return;
    }

    console.log(firstSelectRate, secondSelectRate);

    const resultValue =
      (inputText * secondSelectRate.rate) / firstSelectRate.rate;
    setResult(resultValue.toFixed(4));
  }, [inputText, firstSelect, secondSelect]);

  return (
    <div className="container">
      <Card
        className="card"
        title={<h2>Money Exchange Converter</h2>}
        hoverable
        style={{ width: 400 }}
      >
        <Form>
          <Form.Item>
            <Input
              onChange={(event) => {
                setInputText(event.target.value);
              }}
            />
          </Form.Item>
        </Form>

        <div className="select-portion">
          <Select
            defaultValue={firstSelectDefaultValue}
            style={{ width: "180px" }}
            options={moneyList}
            onChange={(value) => {
              setFirstSelect(value);
            }}
          />
          <Select
            defaultValue={secondSelectDefaultValue}
            style={{ width: "180px" }}
            options={moneyList}
            onChange={(value) => {
              setSecondSelect(value);
            }}
          />
        </div>

        <p>
          {inputText} {firstSelect} = {result} {secondSelect}
        </p>
      </Card>
    </div>
  );
}

export default Exchanger;
