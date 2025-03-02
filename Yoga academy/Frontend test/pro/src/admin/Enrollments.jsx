import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import styles from "./Enrollments.module.css";

// Register the necessary components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const Enrollments = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [courseData, setCourseData] = useState(null);
  const [revenueData, setRevenueData] = useState(null);

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const fetchEnrollments = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/enrollments/all");
      console.log(response.data); // Log the response to check the structure
      setEnrollments(response.data);
      processChartData(response.data);
    } catch (error) {
      console.error("Error fetching enrollments", error);
    }
  };

  const processChartData = (data) => {
    const courseCounts = {};
    const revenueByCourse = {};

    data.forEach((enroll) => {
      const { courseName, amount } = enroll;
      courseCounts[courseName] = (courseCounts[courseName] || 0) + 1;
      revenueByCourse[courseName] = (revenueByCourse[courseName] || 0) + amount;
    });

    setCourseData({
      labels: Object.keys(courseCounts),
      datasets: [
        {
          label: "Enrollments",
          data: Object.values(courseCounts),
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        },
      ],
    });

    setRevenueData({
      labels: Object.keys(revenueByCourse),
      datasets: [
        {
          label: "Revenue",
          data: Object.values(revenueByCourse),
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        },
      ],
    });
  };

  const chartOptions = {
    plugins: {
      legend: {
        labels: {
          font: {
            size: 16,
          },
        },
      },
      tooltip: {
        bodyFont: {
          size: 14,
        },
      },
    },
  };

  return (
    <div className={styles.enrollmentsPage}>
      <h2>Enrollments
      <hr />
      </h2>
      <table className={styles.enrollmentTable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>User Name</th>
            <th>Enrolled Course</th>
            <th>Amount Paid</th>
          </tr>
        </thead>
        <tbody>
          {enrollments.map((enroll) => (
            <tr key={enroll.id}>
              <td>{enroll.id}</td>
              <td>{enroll.userName}</td>
              <td>{enroll.courseName}</td>
              <td>${enroll.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.chartsContainer}>
        {courseData && (
          <div className={styles.pieChart}>
            <h3>Enrollment Distribution</h3>
            <Pie data={courseData} options={chartOptions} />
          </div>
        )}
        {revenueData && (
          <div className={styles.barChart}>
            <h3>Revenue by Course</h3>
            <Bar data={revenueData} options={chartOptions} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Enrollments;
