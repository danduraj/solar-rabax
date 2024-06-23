import React, { useState } from 'react';
import styled from 'styled-components';

const SavingsCalculatorContainer = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  max-width: 100%;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Arial, sans-serif';
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  color: #666;
`;

const SavingsCalculatorContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const SavingsCalculatorForm = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    font-size: 16px;
    margin-bottom: 5px;
    display: block;
    font-weight: bold;
    color: #666;
  }

  input, select {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 100%;
  }
`;

const CalculateButton = styled.button`
  padding: 10px 20px;
  background-color: #ff6f61;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e67e22;
  }
`;

const Results = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ResultItem = styled.div`
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;

  span {
    font-size: 16px;
    color: #666;
  }

  strong {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-top: 10px;
  }
`;

const SavingsCalculator = () => {
  const [electricityBill, setElectricityBill] = useState(2500);
  const [usageType, setUsageType] = useState('Residential');

  const solar_subsidy_calculator = (bill_amount) => {
    const data = [
      {"max_bill": 1200, "capacity": 1, "energy": 1600, "area": 60, "subsidy": 30000, "cost": 83000},
      {"max_bill": 2100, "capacity": 2, "energy": 3200, "area": 120, "subsidy": 60000, "cost": 110000},
      {"max_bill": 2900, "capacity": 3, "energy": 4800, "area": 180, "subsidy": 78000, "cost": 165000},
      {"max_bill": 3700, "capacity": 4, "energy": 6400, "area": 240, "subsidy": 78000, "cost": 220000},
      {"max_bill": 4600, "capacity": 5, "energy": 8000, "area": 300, "subsidy": 78000, "cost": 250000},
      {"max_bill": 5400, "capacity": 6, "energy": 9600, "area": 360, "subsidy": 78000, "cost": 300000},
      {"max_bill": 6200, "capacity": 7, "energy": 11200, "area": 420, "subsidy": 78000, "cost": 350000},
      {"max_bill": 7000, "capacity": 8, "energy": 12800, "area": 480, "subsidy": 78000, "cost": 400000},
      {"max_bill": 7970, "capacity": 9, "energy": 14400, "area": 540, "subsidy": 78000, "cost": 450000},
      {"max_bill": 8800, "capacity": 10, "energy": 16000, "area": 600, "subsidy": 78000, "cost": 500000}
    ];

    for (const entry of data) {
      if (bill_amount <= entry.max_bill) {
        return entry;
      }
    }

    // For bills above 8800
    const extra_units = bill_amount - 8800;
    const extra_capacity = Math.floor(extra_units / 880) + 1;  // Each 880 units adds 1 kw
    const base = data[data.length - 1];
    const capacity = base.capacity + extra_capacity;
    const energy = capacity * 1600;
    const area = capacity * 60;
    const subsidy = 78000;
    const cost = base.cost + (extra_capacity * 50000);  // Assuming the cost increases by 50,000 for each additional kw

    return {
      capacity,
      energy,
      area,
      subsidy,
      cost
    };
  };

  const calculateResults = () => {
    const results = solar_subsidy_calculator(electricityBill);
    const annualSavings = results.energy * 6;

    if (usageType === 'Commercial') {
      return {
        systemSize: `${results.capacity} kW`,
        spaceRequired: `${results.area} sqft`,
        annualEnergyGenerated: `${results.energy} Units`,
        annualSavings: `₹ ${annualSavings}`,
        subsidy: 'N/A',
      };
    } else {
      return {
        systemSize: `${results.capacity} kW`,
        spaceRequired: `${results.area} sqft`,
        annualEnergyGenerated: `${results.energy} Units`,
        annualSavings: `₹ ${annualSavings}`,
        price: `₹ ${results.cost}`,
        subsidy: `₹ ${results.subsidy}`,
      };
    }
  };

  const results = calculateResults();

  return (
    <SavingsCalculatorContainer>
      <Title>Calculate Your Savings</Title>
      <Subtitle>Explore the Potential of Solar Energy and Start Saving From Day 1!</Subtitle>
      <SavingsCalculatorContent>
        <SavingsCalculatorForm>
          <FormGroup>
            <label>Select Usage Type</label>
            <select value={usageType} onChange={(e) => setUsageType(e.target.value)}>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
            </select>
          </FormGroup>
          <FormGroup>
            <label>Enter Your Monthly Electricity Bill (in ₹)</label>
            <input
              type="number"
              value={electricityBill}
              onChange={(e) => setElectricityBill(e.target.value)}
            />
          </FormGroup>
          <CalculateButton onClick={calculateResults}>Calculate</CalculateButton>
        </SavingsCalculatorForm>
        <Results>
          <ResultItem>
            <span>System Size</span>
            <strong>{results.systemSize}</strong>
          </ResultItem>
          <ResultItem>
            <span>Space Required</span>
            <strong>{results.spaceRequired}</strong>
          </ResultItem>
          <ResultItem>
            <span>Annual Energy Generated</span>
            <strong>{results.annualEnergyGenerated}</strong>
          </ResultItem>
          <ResultItem>
            <span>Annual Savings</span>
            <strong>{results.annualSavings}</strong>
          </ResultItem>
          {usageType === 'Residential' && (
            <>
              <ResultItem>
                <span>Price (Excluding Subsidy)</span>
                <strong>{results.price}</strong>
              </ResultItem>
              <ResultItem>
                <span>Subsidy</span>
                <strong>{results.subsidy}</strong>
              </ResultItem>
            </>
          )}
        </Results>
      </SavingsCalculatorContent>
    </SavingsCalculatorContainer>
  );
};

export default SavingsCalculator;