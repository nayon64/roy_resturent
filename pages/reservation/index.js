import Table from '@/components/Reservation/Table/Table';
import BookingModal from '@/components/Shareds/Modal/BookingModal';
import PageMainBanner from '@/components/Shareds/PageMainBanner/PageMainBanner';
import { useState } from 'react';

const index = () => {
  const [bookingModalOpen,setBookingModalOpen]=useState(false)
	return (
    <div className="pt-6">
      <PageMainBanner title={"reservation"} />
      <Table setBookingModalOpen={setBookingModalOpen} />
      {bookingModalOpen && (
        <BookingModal setBookingModalOpen={setBookingModalOpen} />
      )}
    </div>
  );
};

export default index;