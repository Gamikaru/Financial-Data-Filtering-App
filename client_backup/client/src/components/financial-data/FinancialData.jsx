import React, { useEffect, useState } from "react";
import "./FinancialData.css";

const FinancialData = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [filters, setFilters] = useState({
        startYear: 2020,
        endYear: 2024,
        minRevenue: 0,
        maxRevenue: Infinity,
        minNetIncome: 0,
        maxNetIncome: Infinity,
    });
    const [sortConfig, setSortConfig] = useState({ key: "date", direction: "ascending" });
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const apiKey = process.env.REACT_APP_API_KEY;
            console.log("API Key:", apiKey); // Debugging line
            try {
                const response = await fetch(`https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey=${apiKey}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
                setFilteredData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error.message);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (!Array.isArray(data)) {
            setFilteredData([]);
            return;
        }

        let tempData = [...data];
        // Apply Filters
        tempData = tempData.filter(item => {
            const year = parseInt(item.date.split("-")[0], 10);
            return (
                year >= filters.startYear &&
                year <= filters.endYear &&
                item.revenue >= filters.minRevenue &&
                item.revenue <= filters.maxRevenue &&
                item.netIncome >= filters.minNetIncome &&
                item.netIncome <= filters.maxNetIncome
            );
        });
        // Apply Sorting
        tempData.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === "ascending" ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === "ascending" ? 1 : -1;
            }
            return 0;
        });
        setFilteredData(tempData);
    }, [filters, sortConfig, data]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: value === "" ? (name.includes("max") ? Infinity : 0) : Number(value)
        }));
    };

    const handleSort = (key) => {
        let direction = "ascending";
        if (sortConfig.key === key && sortConfig.direction === "ascending") {
            direction = "descending";
        }
        setSortConfig({ key, direction });
    };

    if (error) {
        return (
            <div className="financial-data-container error" role="alert">
                <h1>Error: {error}</h1>
            </div>
        );
    }

    return (
        <div className="financial-data-container">
            <h1>Apple Inc. Financial Data</h1>
            {/* Filters */}
            <div className="filters">
                <input
                    type="number"
                    name="startYear"
                    value={filters.startYear}
                    onChange={handleFilterChange}
                    placeholder="Start Year"
                />
                <input
                    type="number"
                    name="endYear"
                    value={filters.endYear}
                    onChange={handleFilterChange}
                    placeholder="End Year"
                />
                <input
                    type="number"
                    name="minRevenue"
                    value={filters.minRevenue}
                    onChange={handleFilterChange}
                    placeholder="Min Revenue"
                />
                <input
                    type="number"
                    name="maxRevenue"
                    value={filters.maxRevenue === Infinity ? "" : filters.maxRevenue}
                    onChange={handleFilterChange}
                    placeholder="Max Revenue"
                />
                <input
                    type="number"
                    name="minNetIncome"
                    value={filters.minNetIncome}
                    onChange={handleFilterChange}
                    placeholder="Min Net Income"
                />
                <input
                    type="number"
                    name="maxNetIncome"
                    value={filters.maxNetIncome === Infinity ? "" : filters.maxNetIncome}
                    onChange={handleFilterChange}
                    placeholder="Max Net Income"
                />
            </div>
            {/* Sorting */}
            <div className="sorting">
                <button onClick={() => handleSort("date")}>
                    Sort by Date
                </button>
                <button onClick={() => handleSort("revenue")}>
                    Sort by Revenue
                </button>
                <button onClick={() => handleSort("netIncome")}>
                    Sort by Net Income
                </button>
            </div>
            {/* Data Table */}
            <div className="data-table">
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Revenue</th>
                            <th>Net Income</th>
                            <th>Gross Profit</th>
                            <th>EPS</th>
                            <th>Operating Income</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr key={item.date || index}>
                                <td>{item.date}</td>
                                <td>${item.revenue.toLocaleString()}</td>
                                <td>${item.netIncome.toLocaleString()}</td>
                                <td>${item.grossProfit.toLocaleString()}</td>
                                <td>{item.eps}</td>
                                <td>${item.operatingIncome.toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FinancialData;