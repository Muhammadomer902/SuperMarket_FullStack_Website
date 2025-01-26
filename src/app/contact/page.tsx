import React from 'react'

const contact = () => {
  return (
    <div className="p-6 lg:px-20 xl:px-40">
        <section>
        <h2 className="text-2xl font-semibold text-sky-700 mb-4">Contact Us</h2>
        <p className="text-gray-700 leading-relaxed">
          Have questions or want to learn more about us? Feel free to reach out.
          We value every opportunity to connect and collaborate.
        </p>
        <div className="mt-4">
          <p>Email: <a href="mailto:info@ourcompany.com" className="text-sky-600 ">info@ourcompany.com</a></p>
          <p>Phone: <a href="tel:+920000000000" className="text-sky-600">+92 000 0000000</a></p>
          <p>Address: 123 Innovation Lane, Tech City, 56789</p>
        </div>
      </section>
    </div>
  )
}

export default contact