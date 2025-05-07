"use client"

import { useState } from "react"
import { Eye, Edit } from "lucide-react"

interface Patient {
  id: string
  lastName: string
  firstName: string
  registrationNumber: string
  date: string
}

export default function PatientTable() {
  const [patients] = useState<Patient[]>([
    { id: "P101", lastName: "Амар", firstName: "Тегс", registrationNumber: "УА00000000", date: "May 27, 2024" },
    { id: "P102", lastName: "Амгалан", firstName: "Сувд", registrationNumber: "УА00000001", date: "May 27, 2024" },
    { id: "P103", lastName: "Баатар", firstName: "Амар", registrationNumber: "УА00000002", date: "May 27, 2024" },
    { id: "P104", lastName: "Бат", firstName: "Тогос", registrationNumber: "УА00000003", date: "May 27, 2024" },
    { id: "P105", lastName: "Тегс", firstName: "Сувд", registrationNumber: "УА00000004", date: "May 27, 2024" },
    { id: "P106", lastName: "Доржи", firstName: "Амгалан", registrationNumber: "УА00000005", date: "May 27, 2024" },
  ])

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-lg font-medium">Нийт өвчтөн: {patients.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-100">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Овог
              </th>
              <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Нэр
              </th>
              <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Регистрийн дугаар
              </th>
              <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Үзлэг
              </th>
              <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {patients.map((patient) => (
              <tr key={patient.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{patient.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.lastName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.firstName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.registrationNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex space-x-2 justify-end">
                    <button className="p-1 rounded-full bg-blue-100 text-blue-600">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="p-1 rounded-full bg-blue-100 text-blue-600">
                      <Edit className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
