import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
import { Icons } from "../../../assets/icons/icons";
import { device } from "../../../constants/breakpoints";

export const PDFViewer = ({ showModal, setShowModal }) => {
  // const viewerRef = useRef(null);
  // const [currentPage, setCurrentPage] = useState(1);
  // const totalPages = useRef(0);

  // const handleScroll = (event) => {
  //   const { scrollTop, scrollHeight, clientHeight } = event.target;

  //   if (scrollTop + clientHeight >= scrollHeight - 10) {
  //     // Scroll to the bottom, move to the next page
  //     setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages.current));
  //   } else if (scrollTop === 0) {
  //     // Scroll to the top, move to the previous page
  //     setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  //   }
  // };

  // useEffect(() => {
  //   if (viewerRef.current) {
  //     viewerRef.current.scrollTo(0, 0); // Reset scroll position on page change
  //   }
  // }, [currentPage]);

  const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const pdfFileUrl =
    "https://res.cloudinary.com/doi40g1ct/image/upload/v1723815396/EZ-Scheduler/EZ_Story_compressed_blk2yg.pdf";

  // pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
  ).toString();

  return (
    <AnimatePresence>
      {showModal && (
        <ModalView
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="modal-overlay"
        >
          <motion.div
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.3 }}
            className="modal"
            // ref={viewerRef}
            // style={{ height: '100vh', overflowY: 'auto' }}
            // onScroll={handleScroll}
            onClick={(e) => e.stopPropagation()}
          >
            <ContentView>
              <div className="header">
                <button onClick={() => setShowModal(false)}>
                  <ReactSVG src={Icons.close2} />
                </button>
              </div>
              <div className="content">
                {/* <DocViewer
                  style={{ width: 500, height: 600 }}
                  pluginRenderers={DocViewerRenderers}
                  config={{
                    header: { disableHeader: true }
                  }}
                  documents={[{ uri: pdfFileUrl }]}
                /> */}
                <Document
                  file={pdfFileUrl}
                  onLoadSuccess={onDocumentLoadSuccess}
                  className="document"
                >
                  {Array(numPages)
                    .fill()
                    .map((_, i) => (
                      <Page
                        key={`page_${i + 1}`}
                        width={516}
                        pageNumber={i + 1}
                        renderTextLayer={false}
                        className="page"
                      />
                    ))}
                  {Array(numPages)
                    .fill()
                    .map((_, i) => (
                      <Page
                        key={`page_${i + 1}`}
                        width={316}
                        pageNumber={i + 1}
                        renderTextLayer={false}
                        className="mobile-page"
                      />
                    ))}
                </Document>
              </div>
            </ContentView>
          </motion.div>
        </ModalView>
      )}
    </AnimatePresence>
  );
};

const ModalView = styled(motion.div)`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 9009;
  display: flex;
  align-items: center;
  justify-content: center;

  .modal {
    background-color: ${(props) => props.theme.colors?.white};
    z-index: 30000;
    position: fixed;
    border-radius: 28px;
    width: 40vw;
    /* padding: 5rem 0px; */
    /* padding-top: 0;
    padding-bottom: 20px; */
    max-height: 90%;
    overflow-y: scroll;

    @media ${device.mobile} {
      width: 95vw;
      padding: 10px 0;
      max-height: 100%;
      border-radius: 0px;
    }
  }
`;

const ContentView = styled.div`
  /* max-width: 100%; */
  height: 100%;
  display: flex;
  align-items: flex-start;
  margin: 0;
  justify-content: flex-start;
  flex-direction: column;
  padding: 30px;
  gap: 1rem;

  @media ${device.mobile} {
    gap: 0;
    padding: 10px 20px;
  }

  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    button {
      width: 20px;
      border: none;
      outline: none;
      cursor: pointer;
      background: none;

      @media ${device.mobile} {
        width: 10%;
      }
    }
  }

  .content {
    /* max-width: 700px; */
    .document {
      .page {
        width: 20%;

        @media ${device.mobile} {
          display: none;
        }
      }

      .mobile-page {
        display: none;

        @media ${device.mobile} {
          display: block;
          width: 100%;
        }
      }
    }

    @media ${device.mobile} {
      width: 100%;
      padding: 10px 0;
    }
  }
`;
