const Contact = () => {
   return (
     <div className='mt-[10rem] smallM:mt-[6rem] desktop:py-4 flex flex-col items-center gap-[4rem] font-[Arial]'>
       <h2 className='font-bold text-4xl tracking-wide text-center text-red-600'>
         Get in Touch
       </h2>
 
       <form
         action='https://formspree.io/f/xqkradby'
         method='POST'
         className='flex flex-col gap-[2rem] border-black p-6 rounded-md 
         laptop:w-[40%] tablet:w-[50%] mobile:w-[80%] bg-white shadow-lg'
       >
         <input
           type='text'
           placeholder='Your Name'
           name='username'
           required
           className='border-2 border-[#f78f8f] p-3 placeholder:text-sm outline-red-600 rounded-md'
         />
 
         <input
           type='email'
           placeholder='Your Email'
           name='email'
           required
           className='border-2 border-[#f78f8f] p-3 placeholder:text-sm outline-red-600 rounded-md'
         />
 
         <textarea
           name='message'
           rows='5'
           placeholder='Your Message'
           required
           className='border-2 border-[#f78f8f] p-3 placeholder:text-sm outline-red-600 rounded-md'
         />
 
         <button
           type='submit'
           className='bg-red-600 w-full py-2 text-white font-medium tracking-wider 
           rounded-md cursor-pointer hover:bg-red-700 transition duration-300'
         >
           Send Message
         </button>
       </form>
 
       <iframe
         title='map'
         src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108704.21800053399!2d72.580002!3d23.022505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8487b58f1101%3A0xe780ec0d7645d807!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1705341799683!5m2!1sen!2sin'
         width='100%'
         height='350'
         style={{ border: 0 }}
         allowFullScreen=''
         loading='lazy'
         referrerPolicy='no-referrer-when-downgrade'
         className='animate-[flash_2s_ease] bg-gray-200 rounded-md overflow-hidden'
       ></iframe>
     </div>
   );
 };
 
 export default Contact;
 