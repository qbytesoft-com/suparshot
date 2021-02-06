import Navbar from 'components/global/navbar';
import { Modal, ModalDismissButton, ModalOpenButton, ModalContents, Button } from 'components/lib';

function Explore() {
  return (
    <>
      <Navbar />
      <div className="avoid-nav h-screen flex justify-center items-center text-2xl font-semibold">
        <p>Explore SuparShot</p>
        <Modal>
          <ModalOpenButton>
            <Button>Open</Button>
          </ModalOpenButton>
          <ModalContents aria-label="Form">
            <ModalDismissButton>
              <Button variant="light">
                <p>Close</p>
              </Button>
            </ModalDismissButton>
            <p>Hi I'm Modal</p>
          </ModalContents>
        </Modal>
      </div>
    </>
  );
}

export default Explore;
