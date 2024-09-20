Here’s a more polished and organized version of your README file for GitHub. I’ve added some styling and section headers to improve readability and make it visually appealing.

---

# **ContraIndicator**

**ContraIndicator** is an intuitive web-based application designed to visualize and explore drug interactions. Users can input drug names and instantly review potential interactions, helping to make informed decisions in critical care settings. This app is developed based on the research article **“Potential Drug-Drug Interactions in the Pediatric Intensive Care Unit.”**

---

## **Features**
- **Drug Interaction Visualization**: Easily input drug names and instantly view potential interactions.
- **User-Friendly Dashboard**: Simple and intuitive interface for adding and confirming drugs.
- **Interaction History with Circos Plots**: View historical interactions between drugs with visual Circos plots.
  
---

## **Installation**

To install and run the ContraIndicator app locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/tavlab-iiitd/ContraIndicator.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd flask-application
    ```

3. **Create a virtual environment (optional but recommended):**
    ```bash
    python3 -m venv venv
    source venv/bin/activate
    ```

4. **Install the required packages:**
    ```bash
    pip install -r requirements.txt
    ```

---

## **Running the Application**

1. **Navigate to the working directory:**
    ```bash
    cd api
    ```

2. **Start the Flask development server:**
    ```bash
    python wsgi.py
    ```

3. **Open your web browser and visit:**
    ```
    http://localhost:7789
    ```

---

## **Dashboard Overview**

Upon launching the application, you will be presented with a user-friendly dashboard where you can:

- **Input Drug Names**: Click the input field to type or select drugs from a dropdown list.
- **Add Drug**: Add a drug by pressing the **"Add Tag"** button or pressing **Enter**.
- **Review Drug List**: Once you’ve added drugs, click **"Confirm"** or press **Shift + Enter** to review.
- **Submit Drug List**: Click **"Submit"** to get interaction results.

Each drug is added as a tag, and you can remove any unwanted drugs before submission.

---

## **Interaction History with Circos Plots**

You can also view the **interaction history** of drugs through visual **Circos plots**. These allow you to see interactions within a specified date range, offering insights into potential patterns and trends.

- **Specify Date Range**: Input start and end dates to filter interactions.
- **Visual Interpretation**: Circos plots provide an intuitive way to review complex drug interactions.

---

## **Usage Guide**

1. **Start by adding drugs**:  
   Use the input field to add drugs from the dropdown or by typing their names.

2. **Review and Confirm**:  
   After adding the desired drugs, press **"Confirm"** to review the list. You can remove any unwanted drugs at this stage.

3. **Submit for Interaction Analysis**:  
   Once satisfied with the list, click **"Submit"** to generate interaction results using the API.

4. **Explore Interaction History**:  
   Use Circos plots to explore historical drug interactions by specifying a date range.

---

## **Research Reference**

This application is built based on the research article:  
**“Potential Drug-Drug Interactions in the Pediatric Intensive Care Unit”**  
For more details, please refer to the research publication.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

### **Contributors**

- **TAVLab, IIIT-Delhi** – Research and Development Team
- **Your Name (Optional)** – Developer or Contributor

---

Enjoy using **ContraIndicator** to ensure safe and informed medication practices!  

---

