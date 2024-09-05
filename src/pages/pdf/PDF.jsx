import React, { useState } from "react";
import styled from "styled-components";
import { NavBar } from "../../components/NavBar";
import { NavBar2 } from "../../components/NavBar2";
import { Document, Page, pdfjs } from "react-pdf";
import { device } from "../../constants/breakpoints";

export const PDF = () => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const pdfFileUrl =
    "https://res.cloudinary.com/doi40g1ct/image/upload/v1723815396/EZ-Scheduler/EZ_Story_compressed_blk2yg.pdf";

  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
  ).toString();

  return (
    <View>
      <NavBar2 />
      <ContentView>
        <div className="content">
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
                  width={1000}
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
                  width={306}
                  pageNumber={i + 1}
                  renderTextLayer={false}
                  className="mobile-page"
                />
              ))}
          </Document>
        </div>
      </ContentView>
    </View>
  );
};

const View = styled.div`
  padding: 1rem 3rem 4rem 3rem;
  margin-bottom: 2rem;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.purple.purple_30};

  @media ${device.mobile} {
    border-radius: 20px;
    padding: 0.1rem 1rem 1rem 1rem;
  }
`;

const ContentView = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;
  margin: 0;
  justify-content: flex-start;
  flex-direction: column;
  padding: 30px 0;
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
    margin: 0 auto;

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
