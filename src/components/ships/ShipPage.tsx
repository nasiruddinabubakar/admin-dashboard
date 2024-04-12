import PageTitle from '../ui/PageTitle';
import { AllShips } from './AllShips';

export const ShipPage = () => {
  return (
    <div className="w-full flex flex-col gap-4 p-3 h-[100vh] overflow-y-hidden ">
      <PageTitle title="Containers" />

      <section>
        <AllShips/>
      </section>
    </div>
  );
};
