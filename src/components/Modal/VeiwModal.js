import { Button, Modal } from "flowbite-react";
import React from "react";
import PDFViewer from 'pdf-viewer-reactjs'



const ViewModal = ({ open, setOpen ,file,fileName}) => {
  const  url= `http://localhost:8900/${file}`
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(url).then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = `${fileName}`;
            alink.click();
        })
    })
}
  
  
  return (
   
      <Modal show={open} position="center" onClose={() => setOpen(false)}>
       <Modal.Header>View {fileName}</Modal.Header>
          <Modal.Body>
          <center>
                <h3>Click on below button to download PDF file</h3>
                <Button onClick={onButtonClick}>
                    Download PDF
                </Button>
            </center>
          </Modal.Body>
          <Modal.Footer className="flex justify-between">
            <Button color="gray" onClick={() => setOpen(false)}>
              close
            </Button>
          </Modal.Footer>
      </Modal>
    
  );
};

export default ViewModal;
