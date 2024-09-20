The “ContraIndicator” app provides an intuitive interface to view and explore drug interactions. It allows users to input drug names and instantly visualize their interactions. It is developed based on the research article “Potential Drug-Drug Interactions in the Pediatric Intensive Care Unit” Here are the detailed steps to use the app based on the paper:
Installation
1. Clone the repository:
   ```shell
   git clone [https://github.com/tavlab-iiitd/ContraIndicator.git]  
2. Navigate to the project directory:  
    cd flask-application  
3. Create a virtual environment (optional but recommended): 
   python3 -m venv venv
   source venv/bin/activate
4. Install the required packages:
   pip install -r requirements.txt  
Running the Application
  1. Navigate to the working Dir:
     cd  api 
  2. Start the Flask development server:
     python wsgi.py
  3. Open your web browser and visit 
      http://localhost:7789
Dashboard
Upon opening the application, you will immediately notice an input field where you can enter the names of drugs. The dashboard also includes buttons such as "Add Tag," "Confirm," and "Reset List."

Features and Usage
To begin, click on the input field to view a dropdown menu containing a list of available drugs. As you type the common name of the desired drug, the search results will be displayed in the dropdown. You can navigate the options using the up and down arrow keys and add a drug by clicking the "Add Tag" button or pressing the "enter" key on your keyboard. The added drug will appear as a tag above the input field. If needed, you can remove any drug from the list.

Once you have added all the desired drugs, press the "Confirm" button or press "Shift + Enter" on your keyboard to review the list before submitting. At this point, you can still remove any unwanted drugs.
Finally, click the "Submit" button to send the list of drugs. Our API will rapidly generate results, displaying the drug interactions, if any exist.

Interaction History with Circos Plots
The application also allows you to view the interaction history of drugs through Circos plots. You can specify a date range, indicating the start and end dates, to see the interactions that occurred within that period. The Circos plots provide visual representations of the interactions, making it easier to interpret the data.
