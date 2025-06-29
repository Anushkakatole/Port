import React from 'react'
import Experiences from './Experiences'

function Educationtable() {
  return (
    <div className=''>
      {/* Graduation Section */}
      <div className="overflow-x-auto rounded-lg ml-70 mr-70 ">
        <table className="table-auto w-full text-sm md:text-base border-separate border-spacing-y-2">
          <thead className="bg-gray-800 text-purple-600">
            <tr>
              <th className="px-4 py-2 text-left">LEVEL</th>
              <th className="px-4 py-2 text-left">INSTITUTION</th>
              <th className="px-4 py-2 text-left">UNIVERSITY</th>
              <th className="px-4 py-2 text-left">YEAR</th>
              <th className="px-4 py-2 text-left">GRADE</th>
              <th className="px-4 py-2 text-left">HIGHLIGHT</th>
            </tr>
          </thead>
          <tbody className="bg-gray-900">
            {[
              {
                level: 'Fourth Year',
                institution: 'Dr. D. Y. Patil School of Science and Technology, Tathawade–Pune',
                university: 'Dr. D. Y. Patil Vidyapeeth, Pune',
                year: '2027–2028',
                grade: '-',
                highlight: '-',
              },
              {
                level: 'Third Year',
                institution: 'Dr. D. Y. Patil School of Science and Technology, Tathawade–Pune',
                university: 'Dr. D. Y. Patil Vidyapeeth, Pune',
                year: '2026–2027',
                grade: '-',
                highlight: '-',
              },
              {
                level: 'Second Year',
                institution: 'Dr. D. Y. Patil School of Science and Technology, Tathawade–Pune',
                university: 'Dr. D. Y. Patil Vidyapeeth, Pune',
                year: '2025–2026',
                grade: 'Appearing',
                highlight: 'Developing Designs.',
              },
              {
                level: 'First Year',
                institution: 'Dr. D. Y. Patil School of Science and Technology, Tathawade–Pune',
                university: 'Dr. D. Y. Patil Vidyapeeth, Pune',
                year: '2024–2025',
                grade: '8.80 (Aggregate)',
                highlight: 'Active member of Coding Club.',
              },
            ].map((item, idx) => (
              <tr key={idx} className="hover:bg-gray-800 rounded-lg text-gray-500">
                <td className="px-4 py-3 text-white">{item.level}</td>
                <td className="px-4 py-3">{item.institution}</td>
                <td className="px-4 py-3">{item.university}</td>
                <td className="px-4 py-3">{item.year}</td>
                <td className="px-4 py-3">{item.grade}</td>
                <td className="px-4 py-3">{item.highlight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     {/* School section */}

      <h1 className='text-5xl text-white pt-20 pl-70 mb-10'>Schooling (HSC & SSC)</h1>

      <div className="overflow-x-auto rounded-lg ml-70 mr-70 ">
        <table className="table-auto w-full text-sm md:text-base border-separate border-spacing-y-2">
          <thead className="bg-gray-800 text-purple-600">
            <tr>
              <th className="px-4 py-2 text-left">LEVEL</th>
              <th className="px-4 py-2 text-left">INSTITUTION</th>
              <th className="px-4 py-2 text-left">UNIVERSITY</th>
              <th className="px-4 py-2 text-left">YEAR</th>
              <th className="px-4 py-2 text-left">GRADE</th>
              <th className="px-4 py-2 text-left">HIGHLIGHT</th>
            </tr>
          </thead>
          <tbody className="bg-gray-900">
            {[
              {
                level: '12th (HSC)',
                institution: 'SMD Bharati Highschool Arni.',
                university: 'SMD Bharati Highschool Arni.',
                year: '2023–2024',
                grade: '65%',
                highlight: 'Participated in State-level Science Fair.',
              },
              {
                level: '10th (SSC)',
                institution: 'SMD Bharati Highschool Arni.',
                university: 'SMD Bharati Highschool Arni.',
                year: '2021–2022',
                grade: '92.60%',
                highlight: 'School Topper & Math Olympiad Winner.',
              },

            ].map((item, idx) => (
              <tr key={idx} className="hover:bg-gray-800 rounded-lg text-gray-500">
                <td className="px-4 py-3 text-white">{item.level}</td>
                <td className="px-4 py-3">{item.institution}</td>
                <td className="px-4 py-3">{item.university}</td>
                <td className="px-4 py-3">{item.year}</td>
                <td className="px-4 py-3">{item.grade}</td>
                <td className="px-4 py-3">{item.highlight}</td>
              </tr>
            ))}

          </tbody>

        </table>


      </div>
      <Experiences />



    </div>
  )
}

export default Educationtable
