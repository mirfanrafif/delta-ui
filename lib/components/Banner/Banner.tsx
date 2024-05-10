import { TextBody } from '..';
import { BadgeWarning } from '../../assets';

export type BannerProps = {
  label: string;
};

const Banner: React.FC<BannerProps> = (props) => {
  const { label = '' } = props;
  return (
    <div className="flex text-wrap rounded-lg px-4 py-3 gap-3 bg-red-low items-center">
      <div>
        <BadgeWarning />
      </div>
      <TextBody className="text-red-default">{label}</TextBody>
    </div>
  );
};

export default Banner;
