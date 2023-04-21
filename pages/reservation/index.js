import Table from '@/components/Reservation/Table/Table';
import PageMainBanner from '@/components/Shareds/PageMainBanner/PageMainBanner';

const index = () => {
	return (
    <div className="pt-6">
      <PageMainBanner title={"reservation"} />
      <Table/>
    </div>
  );
};

export default index;