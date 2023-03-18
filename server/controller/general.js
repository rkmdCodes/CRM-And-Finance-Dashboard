// import User from "../models/User.js";
// import OverallStat from "../models/OverallStat.js";
// import Transaction from "../models/Transaction.js";

// export const getUser = async (req, res) => {
//   console.log("req is received ", req.params);
//   try {
//     const { id } = req.params;
//     const user = await User.findById(id);
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(403).json({ message: error.message });
//   }
// };

// export const getDashboardStats = async (req, res) => {
//   try {
//     const currentMonth = "November";
//     const currentYear = "2021";
//     const currentDate = "2021-11-15";

//     //Recent Transactions
//     const transaction = await Transaction.find()
//       .limit(50)
//       .sort({ createdOn: -1 });
//     //Overall Stats
//     const overallstat = await OverallStat.find({ year: currentYear });

//     const {
//       totalCustomers,
//       yearlyTotalSoldUnits,
//       yearlySalesTotal,
//       monthlyData,
//       dailyData,
//       salesByCategory,
//     } = overallstat[0];

//     const thisMonthStats = overallstat[0].monthlyData.find(({month})=>{
//         return month === currentMonth; 
//     })

//     const todayStats = overallstat[0].dailyData.find(({date})=>{
//         return date === currentDate; 
//     })
//     res.status(200).json({
//         totalCustomers,
//         yearlyTotalSoldUnits,
//         yearlySalesTotal,
//         monthlyData,
//         salesByCategory,
//         thisMonthStats,
//         todayStats,
//         transaction,
//       });

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

import User from "../models/User.js";
import OverallStat from "../models/OverallStat.js";
import Transaction from "../models/Transaction.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDashboardStats = async (req, res) => {
  try {
    // hardcoded values
    const currentMonth = "November";
    const currentYear = 2021;
    const currentDay = "2021-11-15";

    /* Recent Transactions */
    const transactions = await Transaction.find()
      .limit(50)
      .sort({ createdOn: -1 });

    /* Overall Stats */
    const overallStat = await OverallStat.find({ year: currentYear });

    const {
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
    } = overallStat[0];

    const thisMonthStats = overallStat[0].monthlyData.find(({ month }) => {
      return month === currentMonth;
    });

    const todayStats = overallStat[0].dailyData.find(({ date }) => {
      return date === currentDay;
    });

    res.status(200).json({
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
      thisMonthStats,
      todayStats,
      transactions,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};