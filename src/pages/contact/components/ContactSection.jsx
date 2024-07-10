import React from 'react'
import styled from 'styled-components';
import { NavBar } from '../../../components/NavBar';
import { Input } from '../../../components/Input';

export const ContactSection = () => {
  return (
    <ContactView>
      <NavBar />
      <section>
        <img src="https://res.cloudinary.com/doi40g1ct/image/upload/v1720543832/EZ-Scheduler/image_23_pccdao.png" alt="" className='bg'/>
        <div className='contact'>
          <div className='text'>
            <h2>Get in touch with us!</h2>

            <p>
              Got any question? Please fillout the form, and we'll
              get back to you ASAP or you can reach us through our social media platforms
              or email us.
            </p>
          </div>
          <div className='form'>
            <div className='input'>
              <Input 
                type="text"
                placeholder='Enter your first name'
               />
              <Input 
                type="text"
                placeholder='Enter your last name'
               />
            </div>
            <div className='input'>
              <Input 
                type="email"
                placeholder='Enter your email address'
              />
              <Input 
                type="number"
                placeholder='Enter your phonenumber (optional)' 
              />
            </div>

            <button>
              Send your message
            </button>
          </div>
        </div>
      </section>
    </ContactView>
  )
}

const ContactView = styled.div`
  position: relative;
  margin-bottom: 19rem;
  padding: 2rem;
  /* z-index: 1000; */
  background: linear-gradient(to bottom, #E5E1FC 100%, #E5E1FC 0%);

  .bg {
    position: absolute;
    top: 0;
    right: 2rem;
    left: 2rem;
    width: 90%;
    margin: 0 auto;
  }

  section {
    /* z-index: 1000; */
    margin: 3rem 2rem;

    .contact {
      display: flex;
      
      .text {
        width: 50%;
        z-index: 1000;

        h2 {
          width: 90%;
          font-size: 74px;
          font-weight: 600;
          line-height: 84px;
          color: ${({ theme }) => theme.colors.blue.blue_10};
        }

        p {
          width: 90%;
          font-size: 18px;
          font-weight: 300;
          line-height: 32px;
          padding: 2rem 0;
          color: ${({ theme }) => theme.colors.grey.grey_40};
        }
      }

      .form {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        z-index: 1000;

        .input {
          display: flex;
          gap: 1rem;
          
          input {
            width: 50%;
            height: 50px;
          }

        }

        button {
          width: 35%;
          border: none;
          border-radius: 4px;
          padding: 1rem 1.5rem;
          color: ${({ theme }) => theme.colors.white};
          background-color: ${({ theme }) => theme.colors.purple.purple_10};
        }
      }


    }
  }
`;