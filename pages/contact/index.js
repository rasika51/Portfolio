// components
import Circles from '../../components/Circles';
import Bulb from '../../components/Bulb';

//icons
import {BsArrowRight} from 'react-icons/bs';

// framer motion
import {motion} from 'framer-motion';
import {useState} from 'react';

// variant
import {fadeIn} from '../../variants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear status when user starts typing
    if (submitStatus.message) {
      setSubmitStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/mailcontact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({ type: 'success', message: data.message });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus({ type: 'error', message: data.message || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='h-full bg-primary/30 py-36'>
      <Circles />
      <div className='container mx-auto text-center xl:text-left flex items-center justify-center h-full'>

        {/* text & form */}
        <div className='flex flex-col w-full max-w-[700px]'>

          {/* text */}
          <motion.h2 
            className='h2 text-center mb-12'
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
               Let&apos;s <span className='text-accent'>connect.</span>
          </motion.h2>

          {/* Status Message */}
          {submitStatus.message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-6 p-4 rounded-lg ${
                submitStatus.type === 'success'
                  ? 'bg-green-500/20 border border-green-500/50 text-green-400'
                  : 'bg-red-500/20 border border-red-500/50 text-red-400'
              }`}
            >
              {submitStatus.message}
            </motion.div>
          )}

          {/* form */}
          <motion.form 
            onSubmit={handleSubmit}
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'  
          >

            {/* input group */}
            <div className='flex gap-x-6 w-full'>
              <input 
                type="text" 
                name="name"
                placeholder='Name' 
                className='input'
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
              <input 
                type="email" 
                name="email"
                placeholder='Email' 
                className='input'
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <input 
              type="text" 
              name="subject"
              placeholder='Subject' 
              className='input'
              value={formData.subject}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
            <textarea 
              name="message"
              placeholder='Message' 
              className='textarea'
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              rows={6}
            ></textarea>
            <button 
              type="submit"
              disabled={isSubmitting}
              className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                    Let&apos;s talk
                  </span>
                  <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
                </>
              )}
            </button>
          </motion.form>

        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Contact;
