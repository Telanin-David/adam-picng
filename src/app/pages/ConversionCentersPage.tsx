import { useState, useEffect } from 'react';
import { ConversionCentersHero } from '../components/ConversionCentersHero';
import { ConversionCenterCard } from '../components/ConversionCenterCard';
import { Search, ChevronDown, Filter } from 'lucide-react';

interface ConversionCenter {
  id: string;
  name: string;
  address: string;
  code: string;
  lga: string;
  state: string;
}

// Mock data as fallback when API is unavailable
const mockConversionCenters: ConversionCenter[] = [
  {
    id: '1',
    name: 'ABG Diametrics Ltd Adamawa',
    address: 'SUNSHINE TERMINUS OPP FARO BOTTLING COMPANY KOFARE JIMETA YOLA ADAMAWA STATE',
    code: 'AD3242XIK',
    lga: 'Yola North',
    state: 'Adamawa'
  },
  {
    id: '2',
    name: 'ADAST System',
    address: 'CHIMA ORIAKU STREET, MAITAMA EXTENSION, ABUJA, FCT.',
    code: 'FC4682VNY',
    lga: 'Municipal Area Council',
    state: 'Federal Capital Territory'
  },
  {
    id: '3',
    name: 'Pummis Oil & Gas Ltd',
    address: 'NNPC FILLING STATION, JAHI JUNCTION FLY-OVER, ALONG MURTALA MUHAMMED/KUBWA EXPRESS, ABUJA.',
    code: 'FC3578ZYF',
    lga: 'Municipal Area Council',
    state: 'Federal Capital Territory'
  },
  {
    id: '4',
    name: 'Biogreen Alternative',
    address: 'NO 519/52 AGEGE MOTOR ROAD, ALASIA OSHODI, LAGOS STATE.',
    code: 'LA2847PKM',
    lga: 'Oshodi-Isolo',
    state: 'Lagos'
  },
  {
    id: '5',
    name: 'Gaslink Nigeria Limited',
    address: 'PLOT 1, BLOCK A, ADMIRALTY WAY, LEKKI PHASE 1, LAGOS STATE.',
    code: 'LA5691QWE',
    lga: 'Eti-Osa',
    state: 'Lagos'
  },
  {
    id: '6',
    name: 'Green Energy Solutions',
    address: 'NO 45 PORT HARCOURT ROAD, ABA, ABIA STATE.',
    code: 'AB7823ZXC',
    lga: 'Aba South',
    state: 'Abia'
  },
  {
    id: '7',
    name: 'Natural Gas Conversion Center',
    address: 'KM 5 ENUGU-ONITSHA EXPRESSWAY, AWKA, ANAMBRA STATE.',
    code: 'AN4512VBN',
    lga: 'Awka South',
    state: 'Anambra'
  },
  {
    id: '8',
    name: 'CNG Auto Conversions',
    address: '12 AIRPORT ROAD, BENIN CITY, EDO STATE.',
    code: 'ED9876ASD',
    lga: 'Oredo',
    state: 'Edo'
  },
  {
    id: '9',
    name: 'Eco Drive Nigeria',
    address: 'PLOT 45, INDUSTRIAL LAYOUT, KANO, KANO STATE.',
    code: 'KN3421FGH',
    lga: 'Kano Municipal',
    state: 'Kano'
  },
  {
    id: '10',
    name: 'AutoGas Conversion Hub',
    address: 'NO 78 AHMADU BELLO WAY, KADUNA, KADUNA STATE.',
    code: 'KD6543JKL',
    lga: 'Kaduna North',
    state: 'Kaduna'
  },
  {
    id: '11',
    name: 'CleanFuel Technologies',
    address: 'OPPOSITE MEGA PLAZA, RING ROAD, IBADAN, OYO STATE.',
    code: 'OY8765MNB',
    lga: 'Ibadan North',
    state: 'Oyo'
  },
  {
    id: '12',
    name: 'Prime Gas Converters',
    address: 'NO 234 OBA AKRAN AVENUE, IKEJA, LAGOS STATE.',
    code: 'LA1234POI',
    lga: 'Ikeja',
    state: 'Lagos'
  }
];

export default function ConversionCentersPage() {
  const [centers, setCenters] = useState<ConversionCenter[]>([]);
  const [filteredCenters, setFilteredCenters] = useState<ConversionCenter[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('All States');
  const [showStateDropdown, setShowStateDropdown] = useState(false);
  const [states, setStates] = useState<string[]>([]);

  // Fetch conversion centers from API
  useEffect(() => {
    const fetchCenters = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://pcngi.com.ng/api/v1/conversion-centers?limit=50',
          {
            mode: 'cors',
            headers: {
              'X-Api-Key': '',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch conversion centers');
        }

        const data = await response.json();
        
        // Transform API data to match our interface
        const transformedData: ConversionCenter[] = data.data.map((center: any) => ({
          id: center.id || center.code,
          name: center.name || center.businessName || 'N/A',
          address: center.address || 'N/A',
          code: center.code || 'N/A',
          lga: center.lga || 'N/A',
          state: center.state || 'N/A',
        }));

        setCenters(transformedData);
        setFilteredCenters(transformedData);

        // Extract unique states for filter
        const uniqueStates = Array.from(
          new Set(transformedData.map((center) => center.state))
        ).sort();
        setStates(uniqueStates);
      } catch (error) {
        console.error('Error fetching conversion centers:', error);
        console.log('Using mock data as fallback...');
        
        // Use mock data as fallback
        setCenters(mockConversionCenters);
        setFilteredCenters(mockConversionCenters);
        
        // Extract unique states from mock data
        const uniqueStates = Array.from(
          new Set(mockConversionCenters.map((center) => center.state))
        ).sort();
        setStates(uniqueStates);
      } finally {
        setLoading(false);
      }
    };

    fetchCenters();
  }, []);

  // Filter centers based on search and state
  useEffect(() => {
    let result = centers;

    // Filter by state
    if (selectedState !== 'All States') {
      result = result.filter((center) => center.state === selectedState);
    }

    // Filter by search query
    if (searchQuery) {
      result = result.filter(
        (center) =>
          center.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          center.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
          center.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
          center.lga.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredCenters(result);
  }, [searchQuery, selectedState, centers]);

  const handleReset = () => {
    setSearchQuery('');
    setSelectedState('All States');
  };

  return (
    <>
      <ConversionCentersHero />

      {/* Search and Filter Section */}
      <section className="bg-white py-8 lg:py-12">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="bg-white border border-[#e5e5e5] rounded-[24px] p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
              {/* Search Input */}
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search centre name or address"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-[18px] py-[18px] pr-12 border border-[#e5e5e5] rounded-[12px] text-[14px] leading-[20px] placeholder:text-[#a9b1c1] focus:outline-none focus:border-[#1bad50]"
                  />
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#a9b1c1]" />
                </div>
              </div>

              {/* State Dropdown */}
              <div className="relative lg:w-[358px]">
                <button
                  onClick={() => setShowStateDropdown(!showStateDropdown)}
                  className="w-full px-[18px] py-[18px] border border-[#e5e5e5] rounded-[12px] text-[14px] leading-[20px] text-[#a9b1c1] bg-white flex items-center justify-between hover:border-[#1bad50] transition-colors"
                >
                  <span>
                    {selectedState} ({filteredCenters.length})
                  </span>
                  <ChevronDown className="w-[18px] h-[18px]" />
                </button>

                {/* Dropdown Menu */}
                {showStateDropdown && (
                  <div className="absolute top-full mt-2 w-full bg-white border border-[#e5e5e5] rounded-[12px] shadow-lg max-h-[300px] overflow-y-auto z-10">
                    <button
                      onClick={() => {
                        setSelectedState('All States');
                        setShowStateDropdown(false);
                      }}
                      className="w-full px-4 py-3 text-left text-[14px] hover:bg-gray-50 transition-colors"
                    >
                      All States ({centers.length})
                    </button>
                    {states.map((state) => (
                      <button
                        key={state}
                        onClick={() => {
                          setSelectedState(state);
                          setShowStateDropdown(false);
                        }}
                        className="w-full px-4 py-3 text-left text-[14px] hover:bg-gray-50 transition-colors"
                      >
                        {state} (
                        {centers.filter((c) => c.state === state).length})
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Filter and Reset Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => setShowStateDropdown(!showStateDropdown)}
                  className="bg-[#1bad50] text-white px-6 py-[18px] rounded-[12px] text-[14px] font-semibold flex items-center gap-3 hover:bg-[#159943] transition-colors"
                >
                  Filter
                  <Filter className="w-[18px] h-[18px]" />
                </button>
                <button
                  onClick={handleReset}
                  className="bg-white text-[#1bad50] px-6 py-[18px] rounded-[12px] text-[14px] font-semibold border border-[#1bad50] hover:bg-[#f0fdf4] transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Centers Grid */}
      <section className="bg-[#f6f6f6] py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-16">
          {loading ? (
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#1bad50] mb-4"></div>
                <p className="text-gray-600">Loading conversion centers...</p>
              </div>
            </div>
          ) : filteredCenters.length === 0 ? (
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <p className="text-gray-600 text-lg mb-2">No conversion centers found</p>
                <p className="text-gray-500 text-sm">Try adjusting your search or filters</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCenters.map((center) => (
                <ConversionCenterCard
                  key={center.id}
                  name={center.name}
                  address={center.address}
                  code={center.code}
                  lga={center.lga}
                  state={center.state}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}