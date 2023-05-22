# ContraIndicator
Dashboard Visualization of Potential Drug Drug Interactions

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/flask-application.git
   
2. Navigate to the project directory:  

   cd flask-application
  
3. Create a virtual environment (optional but recommended): 
   python3 -m venv venv
   source venv/bin/activate

4. Install the required packages:
   pip install -r requirements.txt  
  
  ## Running the Application
  1. Go to working Dir:
     cd  api 
  2. Start the Flask development server:
     Python main.py
  
  3. Open your web browser and visit 
      http://localhost:9000

  




## Introduction
The main focus of the application is to display the presence and severity of various interactions between about 2000 drugs. The application provides a clean responsive user interface that can be used to get ultrafast results with minimal steps. 
## Dashboard
As soon as you open the application, you can find an input field where you can enter drug names along with some buttons like "Add Tag", "Confirm" and "Reset List".
## Features and Usage
Click on the input field to display the list of all the drugs to choose from. As you type the common name of your desired drug, the search results are displayed on the dropdown menu and you can select using up/down arrow keys and add by simply clicking on the 'Add Tag" button or hitting the 'enter' key on your keyboard. This will add the drug as a tag and show up above the input field. You can keep track of all the drugs being added here and remove if you wish to. 

Once you add the drugs of your choice, press "Confirm" or hit "Shift + Enter" on your keyboard to confirm all the drugs you added for another time before submitting. You may still choose to remove unwanted drugs at this point.

Then, simply click on "Submit" to submit the list of drugs and our API will provide you with lightning fast results showing the various interactions between the drugs if present. 
