import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
// import { Oval } from 'react-loader-spinner';
// import { useEffect, useState } from 'react';

export const FormModal = ({ showCreateModal, setShowCreateModal}) => {
  // const types = useQuery({
  //   queryKey: ['types'],
  //   queryFn: fetchTermTypes,
  // });

  // const handleCreateTerm = useMutation({
  //   mutationFn: (data) => createTerm(data),
  //   onSuccess: () => {
  //     setTermData({
  //       type: '',
  //       content: ''
  //     });
  //     queryClient.invalidateQueries(['terms']);
  //     setShowCreateModal(false);
  //     toast.success('Term created successfully.');
  //   },
  //   onError: (error) => {
  //     toast.error(error?.response?.data?.message);
  //   }
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setTermData({...termData, [name]: value});
  //   console.log(termData)
  // }

  // const handleContentChange = (newContent) => {
  //   setContent(newContent);
  //   setTermData({ ...termData, content: newContent }); // Update termData with new content
  //   console.log(termData); // Log the new content
  // };

  // const onSubmit = () => {
  //   handleCreateTerm.mutate(termData);
  // };

  return (
    <AnimatePresence>
      {showCreateModal && (
        <ModalView
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="modal-overlay">
          <motion.div
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.3 }}
            className="modal"
            onClick={(e) => e.stopPropagation()}>
            {/* ======== Content ======== */}
            <ModalContent>
              <ContentView>
                <HeaderView>
                  <h3>Stay in the loop</h3>
                  <button className="close" onClick={() => setShowCreateModal(false)}>
                    <CloseIcon />
                  </button>
                </HeaderView>
                <Content>
                  <div className="info">
                    <div className="icon">
                      <InfoIcon />
                    </div>
                    <p>
                      Please fill in the necessary fields to enable you create a term.
                    </p>
                  </div>
                  <DataView>
                    <InputView>
                      <LabelView>
                        <label>Term Type</label>
                      </LabelView>
                      {/* <Input 
                        className='input'
                        type='text'
                        name='type'
                        placeholder='Enter term type'
                        value={termData.type}
                        onChange={handleChange} 
                      /> */}
                      <select name="type" value={termData.type} onChange={handleChange}>
                        <option value="">Select a term type</option>
                        {types.data?.data.map((type) => (
                          <option value={type.type} key={type.type}>
                            {type.type}
                          </option>
                        ))}
                      </select>
                      <p className='hint'>Please ensure that all inputs are in capital letters and include an underscore when specifying the type, for example, INVOICE_FINANCING.</p>
                    </InputView>
                  </DataView>
                  <DataView>
                    <InputView>
                      <LabelView>
                        <label>Term Content</label>
                      </LabelView>
                      <WYSIWYG value={content} setValue={handleContentChange} placeholder="Enter the content for this term" />
                    </InputView>
                  </DataView>

                  <div className="cta">
                    <button className="cancel" onClick={() => setShowCreateModal(!showCreateModal)}>
                      Cancel
                    </button>
                    <button className="approve" onClick={onSubmit}>
                      {handleCreateTerm.isLoading ? (
                        <span>
                          <Oval
                            color="#FFF"
                            secondaryColor="#ddd"
                            height={20}
                            width={20}
                            strokeWidth={4}
                            ariaLabel="loading"
                          />
                        </span>
                      ) : (
                        'Create Term'
                      )}
                    </button>
                  </div>
                </Content>
              </ContentView>
            </ModalContent>
          </motion.div>
        </ModalView>
      )}
    </AnimatePresence>
  );
}

export default CreateTermsModal;

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
    border-radius: 4px;
    width: 50vw;
    padding: 30px 10px;
    padding-top: 0;
    padding-bottom: 20px;
    border-radius: 6px;
    max-height: 90%;
    overflow-y: scroll;
  }
`;

const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  margin: 0;
  justify-content: flex-start;
  flex-direction: column;
  padding: 20px;

  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    h3 {
      font-size: 1rem;
      font-weight: 600;
    }
  }
`;

const ContentView = styled.div`
  width: 100%;
`;

const HeaderView = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors?.secondary};
  }

  .close {
    width: 30px;
    height: 30px;
    border-radius: 4px;
    background-color: #f3f2f2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const DataView = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors?.white};

  .disabled {
    background-color: #f2f2f2;
    color: #999999;
  }

  .check {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin-bottom: 0;
    gap: 1rem;

    .radio-input {
    }
  }
`;

const InputView = styled.div`
  width: 100%;
  position: relative;

  .input::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .currency-input {
    width: 100%;
    height: 64px;
    outline: none;
    margin-top: 5px;
    font-size: 1rem;
    font-weight: 300;
    text-indent: 15px;
    border-radius: 6px;
    transition: all 0.2s ease-in-out;
    background-color: ${({ theme }) => theme.colors?.inputBackground};
    border: 1px solid ${({ theme }) => theme.colors?.inputBackground};

    &:focus {
      background-color: ${({ theme }) => theme.colors?.white};
      border: 1px solid ${({ theme }) => theme.colors?.activeTitle};
    }

    &:disabled {
      background-color: #f2f2f2;
      color: #999999;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors?.placeholder};
      font-size: 1rem;
      font-weight: 300;
    }
  }

  select {
    padding: 0 1rem;
    margin-top: 5px;
    width: 100%;
    height: 4rem;
    border-radius: 5px;
    border: none;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 0 20px;
    font-weight: 600;
    background-color: ${({ theme }) => theme.colors?.inputBackground};
  }

  .icon {
    background-color: transparent;
    padding: 0;
    margin: 0;
    outline: none;
    border: none;
    position: absolute;
    top: 2.85rem;
    right: 12px;
    cursor: pointer;

    svg {
      transition: all 0.3s ease-in-out;
      transform: ${({ open }) => (open ? 'rotate(180deg)' : 'none')};
      transform-origin: 50% 50%;
      width: 20px;
      height: 15px;
    }
  } 

  .input {
    position: relative;

    button {
      position: absolute;
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
      margin-top: 5px;
    }
  }

  .hint {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors?.info};
  }

  .error-label {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.error_200};
    margin-top: 5px;
  }
`;

const LabelView = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 0px;

  label {
    font-size: 1rem;
  }
`;

const ButtonView = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0 40px 0;

  .btn-disabled {
    cursor: not-allowed;
    color: #F2F2F2;
    background-color: ${({ theme }) => theme.colors?.info};
  }
`;

const Content = styled.div`
  width: 100%;
  margin-top: 30px;

  .info {
    width: 100%;
    background-color: ${(props) => props.theme.colors?.warningBackground};
    border-radius: 6px;
    padding: 14px;
    display: flex;
    align-items: center;

    .icon {
      margin-right: 10px;
    }

    p {
      font-size: 0.9rem;
      font-weight: 400;
      color: ${(props) => props.theme.colors?.secondary};
    }
  }

  .input-view {
    width: 100%;
    margin-top: 30px;

    .calendar {
      border-radius: 1rem;
      margin-bottom: 2rem;
    }

    label {
      font-size: 0.875rem;
    }

    .error-label {
      font-size: 0.8rem;
      color: ${({ theme }) => theme.colors.error_200};
      margin-top: 5px;
    }

    .select-view {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      margin-bottom: 20px;
      margin-top: 8px;

      .select-item {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 20px;

        .checkbox {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;

          input {
            width: 20px;
            height: 20px;
            margin-right: 10px;
            cursor: pointer;
            accent-color: ${(props) => props.theme.colors?.secondary};
            color: ${(props) => props.theme.colors?.primary};
          }

          label {
            font-size: 1rem;
            font-weight: 500;
            color: ${(props) => props.theme.colors?.secondary};
            cursor: pointer;
          }
        }
      }
    }
  }

  .cta {
    width: 100%;
    margin-top: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .approve {
      width: 120px;
      height: 40px;
      border-radius: 6px;
      background-color: ${(props) => props.theme.colors?.secondary};
      color: ${(props) => props.theme.colors?.white};
      font-size: 0.9rem;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 20px;
    }
  }
`;