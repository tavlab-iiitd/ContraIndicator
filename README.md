# 🚨 **ContraIndicator**

**ContraIndicator** is an integrated tool designed to **detect, visualize, and prevent Potential Drug–Drug Interactions (PDDIs)** in clinical practice. This tool helps clinicians and researchers by providing a reliable platform to analyze prescriptions and evaluate the safety of combined drug use, especially in **critical care settings**.

This tool was developed as part of the research:  
📄 *"ContraIndicator: A Natural Language Processing-Based Approach to Potential Drug-Drug Interaction Detection in Pediatric Intensive Care"* – published by **TavLab, IIIT-Delhi**.

---

## 🌟 **Core Features**

### 🔹 ContraIndicator Web Tool
- Upload `.doc` prescriptions written by clinicians.
- NLP-based drug extraction and mapping.
- Drug–drug interaction check with visual alerts.
- Historical analysis with Circos visualizations.

### 🔹 ContraIndicator GUI Tool
- Standalone GUI for offline use.
- Write or load prescriptions in `.txt` format.
- Get interaction alerts as you type.
- Suitable for bedside or quick use by doctors.

---

## 🧠 **Technical Architecture**

| Component      | Technology        |
|----------------|------------------|
| Backend (API)  | Flask (Python)    |
| GUI Interface  | Tkinter           |
| NLP Extraction | `docx2txt`, RegEx |
| Visualization  | HTML, CSS, Circos, Tkinter |
| Packaging      | `pyinstaller` or native Python |

---

## 🗂️ Folder Structure

```
ContraIndicator/       
├── GUI/                    # Standalone GUI app
├── WEB/
```

---

## 💻 System Requirements

- Python 3.7+
- OS: Linux, macOS, or Windows
- RAM: ≥ 4 GB
- Python dependencies listed in `requirements.txt`

---

## 🧩 Installation Guide

### 🔸 Step 1: Clone the Repository

```bash
git clone https://github.com/tavlab-iiitd/ContraIndicator.git
cd ContraIndicator
```

### 🔸 Step 2: Create a Virtual Environment (Highly Recommended)

```bash
python3 -m venv venv
source venv/bin/activate  # For Windows: venv\Scripts\activate
```

### 🔸 Step 3: Install Required Dependencies

```bash
pip install -r requirements.txt
```

---

## ▶️ Run the Web Application

Navigate to the web API folder:

```bash
cd flask-application/api
python wsgi.py
```

Access the tool at:  
🌐 [http://localhost:7789](http://localhost:7789)

---

## 🖥️ Run the GUI Application

### Launch the GUI:
```bash
cd GUI
Run runner.exe
```

- A desktop app window will appear.
- Type or paste your treatment chart.
- Press **“Check Interactions”** to view results.
- Save or open `.txt` files using the toolbar.

> ✅ *No internet required for GUI usage.*

---

## 📊 Interaction History (Web Tool Only)

- Go to **Circos** tab after checking drugs.
- View timeline of all past interactions.
- Filter by patient, date range, or interaction type.
- Export results if needed.

---

## **Dashboard Overview**

Upon launching the application, you will be presented with a user-friendly dashboard where you can:
![image4](https://github.com/user-attachments/assets/10f6d708-aee4-49fa-ab70-4a84640ea731)

- **Input Drug Names**: Click the input field to type or select drugs from a dropdown list.
- **Add Drug**: Add a drug by pressing the **"Add Tag"** button or pressing **Enter**.
- **Review Drug List**: Once you’ve added drugs, click **"Confirm"** or press **Shift + Enter** to review.
- **Submit Drug List**: Click **"Submit"** to get interaction results.

Each drug is added as a tag, and you can remove any unwanted drugs before submission.
![image1](https://github.com/user-attachments/assets/2983723f-2433-4e58-976a-08e345af751c)
![image6](https://github.com/user-attachments/assets/7bdd67d1-a7ab-4e0d-8b7d-a938f43bb6c2)

---

## **Interaction History with Circos Plots**

You can also view the **interaction history** of drugs through visual **Circos plots**. These allow you to see interactions within a specified date range, offering insights into potential patterns and trends.

- **Specify Date Range**: Input start and end dates to filter interactions.
- **Visual Interpretation**: Circos plots provide an intuitive way to review complex drug interactions.
![image7](https://github.com/user-attachments/assets/52bb3117-c5a8-470f-9326-bc8cc433cc9b)

---



---

## 🧪 Sample Use Cases

### 👩‍⚕️ Clinician
- Use the GUI at the bedside to validate treatment plans in real-time.

### 🧬 Researcher
- Upload batch `.doc` prescriptions to explore trends in drug interactions.

### 🧑‍💻 Developer
- Extend the API or integrate it into hospital EHR systems.

---

## 🔬 Research Backing

This tool is based on research that analyzed drug interactions in critical care settings, specifically pediatric ICUs. It utilizes a curated and validated drug–drug interaction database to ensure clinical relevance.

---

## 📄 License

This project is licensed under the **MIT License**.  
Please refer to the [LICENSE](LICENSE) file for terms.

---

## 👥 Contributors

- **TavLab, IIIT-Delhi** – Research, Design, and Development  
- Open for collaboration and contributions!

