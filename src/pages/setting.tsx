import { Tab } from '@headlessui/react';
import { LocationMarkerIcon, UsersIcon } from '@heroicons/react/outline';
import type { NextPage } from 'next';
import { useCallback, useState } from 'react';
import SetChildNum from 'src/components/organisms/SetChildNum';
import SetContainer from 'src/containers/templates/Set';

const Home: NextPage = () => {
  const [childNumState, setChildNumState] = useState<string | undefined>();

  const setValue = useCallback((value: string | undefined) => {
    setChildNumState(value);
  }, []);

  return (
    <Tab.Group manual>
      <div
        id="tabContent"
        className="container mx-auto flex flex-col h-full w-full border border-gray-200 bg-white focus:outline-none"
      >
        <Tab.List className="mx-auto mb-5 flex space-x-5 p-1 w-full">
          <Tab
            className={({ selected }) => {
              return `
            ${
              selected
                ? 'bg-white text-blue-700 border-gray-300'
                : 'text-blue-300 border-gray-100 hover:bg-white/[0.12] hover:text-blue-500 hover:border-gray-200'
            } w-full py-2.5 text-sm leading-5 font-medium rounded-lg px-4 shadow border`;
            }}
          >
            {<UsersIcon className="h-5 w-5 inline mr-1.5" />}
            <span className="align-middle">人数設定</span>
          </Tab>
          <Tab
            className={({ selected }) => {
              return `
            ${
              selected
                ? 'bg-white text-blue-700 border-gray-300'
                : 'text-blue-300 border-gray-100 hover:bg-white/[0.12] hover:text-blue-500 hover:border-gray-200'
            } w-full py-2.5 text-sm leading-5 font-medium  rounded-lg px-4 shadow border`;
            }}
          >
            {<LocationMarkerIcon className="h-5 w-5 inline mr-1.5" />}
            <span className="align-middle">席設定</span>
          </Tab>
        </Tab.List>
        <Tab.Panels className="flex-1">
          <Tab.Panel className="h-full">
            {<SetChildNum {...{ childNumState, setValue }} />}
          </Tab.Panel>
          <Tab.Panel className="h-full">
            {
              <SetContainer
                arrayNumProps={childNumState ? parseInt(childNumState) : 1}
              />
            }
          </Tab.Panel>
        </Tab.Panels>
      </div>
    </Tab.Group>
  );
};

export default Home;
