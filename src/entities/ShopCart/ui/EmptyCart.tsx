import { useDictionary } from '@hooks';
import { Button } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { AppPaths } from '@root/app/navigation';

export const EmptyCart = () => {
  const d = useDictionary();
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="mb-10 text-center">{d.cartIsEmpty}</h1>
      <Button
        fullWidth
        variant="solid"
        color="primary"
        size="lg"
        onPress={() => {
          navigate(AppPaths.ROOT);
        }}
      >
        {d.checkoutPageBackToMainPage}
      </Button>
    </div>
  );
};
