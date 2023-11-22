import { selectedClients } from '@/constants';
import parse from 'html-react-parser';

export const SelectedClients = () => {
  const getAnimationDelay = (index: number) => {
    switch (index) {
      case 1:
      case 4: {
        return '0.2s';
      }
      case 2:
      case 5:
      case 8: {
        return '0.4s';
      }
      case 3:
      case 6:
      case 9: {
        return '0.6s';
      }
      case 7:
      case 10: {
        return '0.8s';
      }
      case 11: {
        return '1s';
      }
      case 0:
      default: {
        return '0s';
      }
    }
  };

  return (
    <div className="mt-24">
      <h3 className="text-2xl">{selectedClients.title}</h3>
      <div className="relative mt-14">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {selectedClients.items.slice(0, selectedClients.items.length / 2).map((item, i) => (
            <div
              className="animate-fade w-full h-40 flex items-center justify-center gap-2"
              style={{ animationDelay: getAnimationDelay(i) }}
            >
              {parse(item)}
            </div>
          ))}
        </div>

        <div className="absolute grid grid-cols-2 md:grid-cols-4 top-0 w-full">
          {selectedClients.items.slice(selectedClients.items.length / 2).map((item, i) => (
            <div
              className="animate-fade-reverse w-full h-40 flex items-center justify-center gap-2"
              style={{ animationDelay: getAnimationDelay(i) }}
            >
              {parse(item)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
