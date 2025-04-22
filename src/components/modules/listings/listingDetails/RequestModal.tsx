'use client';

import { submitListing } from '@/services/Rental Request';
import { useState, FormEvent } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'sonner';


type modalProps = {
    listingId: string;
  };
const RentalModal: React.FC<modalProps> = ({ listingId }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [moveInDate, setMoveInDate] = useState<Date | null>(null);
  const [rentalDuration, setRentalDuration] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const requestFormData = {
        status: 'Pending',
        listingId: listingId,
        moveDate: moveInDate,
        rentDuration: rentalDuration,
        message: message,
      };
    console.log(requestFormData);
     try {
          const res = await submitListing(requestFormData);
    
          if (res.success) {
            toast.success(res.message);
            setIsOpen(false);
            // Reset form
            setMoveInDate(null);
            setRentalDuration('');
            setMessage('');
          } else {
            console.log(res);
            toast.error(res.message);
          }
        } catch (err: any) {
          console.error(err);
        }
   
  };

  return (
    <div>
      {/* Button to open modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Request for Rental
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Rental Request</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Move-in Date */}
              <div className="mb-4">
                <label htmlFor="moveInDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Move-in Date
                </label>
                <DatePicker
                  id="moveInDate"
                  selected={moveInDate}
                  onChange={(date: Date | null) => setMoveInDate(date)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  dateFormat="MM/dd/yyyy"
                  placeholderText="Select move-in date"
                  minDate={new Date()}
                  required
                />
              </div>

              {/* Rental Duration */}
              <div className="mb-4">
                <label htmlFor="rentalDuration" className="block text-sm font-medium text-gray-700 mb-1">
                  Rental Duration (months)
                </label>
                <input
                  type="number"
                  id="rentalDuration"
                  value={rentalDuration}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRentalDuration(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter rental duration"
                  min="1"
                  required
                />
              </div>

              {/* Message */}
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RentalModal;