import { zodResolver } from '@hookform/resolvers/zod';
import { useDictionary } from '@hooks';
import { Button, Input, Select, SelectItem } from '@nextui-org/react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AppPaths } from '@root/app/navigation';
import { useCartStore, useTotalQuantity } from '@root/entities';
import { EmptyCart } from '@root/entities/ShopCart';
import { pickupPointsData } from './model/pickup-points-data';
import { CheckoutSchema, type CheckoutSchemaType } from './model/schema';
import { sendDataFetcher } from './model/send-data-fetcher';

const defaultValues = {
  name: '',
  phone: '',
  delivery_type: '',
  address_pickup: '',
  address_city: '',
  address_street: '',
  address_house: '',
  address_block: '',
  address_entrance: '',
  address_doorbell_code: '',
  address_floor: '',
  address_apartment: '',
  address_comment: '',
};

export const CheckoutPage = () => {
  const d = useDictionary();
  const navigate = useNavigate();
  const totalQuantity = useTotalQuantity();
  const cart = useCartStore((state) => state.cart);
  const resetCart = useCartStore((state) => state.resetCart);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<CheckoutSchemaType>({
    defaultValues: defaultValues,
    resolver: zodResolver(CheckoutSchema),
  });

  const deliveryType = useWatch({
    control,
    name: 'delivery_type',
  });

  const submitHandler = (data: CheckoutSchemaType) => {
    console.log(data);
    // sendDataFetcher({
    //   cart: cart,
    //   delivery_data: data,
    // });
    resetCart();
  };

  const endBuyingSessionHandler = () => {
    reset();
    navigate(AppPaths.ROOT);
  };

  if (totalQuantity === 0 && !isSubmitSuccessful) {
    return <EmptyCart />;
  }

  return (
    <div>
      <h1 className="mb-10 text-center">{d.checkoutPageTitle}</h1>
      {isSubmitSuccessful ? (
        <div className="space-y-10">
          <h2 className="text-center">{d.checkoutPageSuccessMessage}</h2>
          <h3 className="text-center text-xl font-semibold">{d.checkoutPageManagerWillContactYou}</h3>
          <Button fullWidth variant="solid" color="primary" size="lg" onPress={endBuyingSessionHandler}>
            {d.checkoutPageBackToMainPage}
          </Button>
        </div>
      ) : (
        <form className="space-y-10" onSubmit={handleSubmit(submitHandler)}>
          <div className="space-y-5">
            <h3 className="text-xl">{d.aboutBuyerTitle}</h3>
            <div className="space-y-5">
              <Controller
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    color="primary"
                    isInvalid={!!errors[field.name]}
                    errorMessage={errors[field.name]?.message}
                    label={d.buyerNameInputLabel}
                    isRequired
                  />
                )}
                name="name"
                control={control}
              />
              <Controller
                render={({ field: { onChange, ...field } }) => (
                  <Input
                    {...field}
                    onChange={(e) => {
                      onChange(e.target.value.replace(/\D/g, ''));
                    }}
                    color="primary"
                    type="text"
                    startContent="+"
                    isInvalid={!!errors[field.name]}
                    errorMessage={errors[field.name]?.message}
                    label={d.buyerPhoneInputLabel}
                    isRequired
                  />
                )}
                name="phone"
                control={control}
              />
            </div>
          </div>
          <div className="space-y-5">
            <h3 className="text-xl">{d.deliveryInfoTitle}</h3>
            <div className="space-y-5">
              <Controller
                render={({ field }) => (
                  <Select
                    color="primary"
                    label={d.deliveryType}
                    onChange={field.onChange}
                    selectedKeys={[field.value]}
                    isInvalid={!!errors[field.name]}
                    errorMessage={errors[field.name]?.message}
                    isRequired
                  >
                    <SelectItem
                      classNames={{
                        base: 'text-theme-button-color',
                      }}
                      key={d.deliveryTypeSelfPickup}
                    >
                      {d.deliveryTypeSelfPickup}
                    </SelectItem>
                    <SelectItem
                      classNames={{
                        base: 'text-theme-button-color',
                      }}
                      key={d.deliveryTypeCourier}
                    >
                      {d.deliveryTypeCourier}
                    </SelectItem>
                  </Select>
                )}
                name="delivery_type"
                control={control}
              />
              {deliveryType === d.deliveryTypeSelfPickup && (
                <Controller
                  render={({ field }) => (
                    <Select
                      items={pickupPointsData}
                      color="primary"
                      label={d.selectPickupPoint}
                      onChange={field.onChange}
                      selectedKeys={[field.value]}
                      isRequired
                      isInvalid={!!errors[field.name]}
                      errorMessage={errors[field.name]?.message}
                    >
                      {(item) => (
                        <SelectItem
                          classNames={{
                            base: 'text-theme-button-color',
                          }}
                          key={item.address}
                        >
                          {item.address}
                        </SelectItem>
                      )}
                    </Select>
                  )}
                  name="address_pickup"
                  control={control}
                />
              )}
              {deliveryType === d.deliveryTypeCourier && (
                <>
                  <div className="grid grid-cols-2 gap-2.5">
                    <Controller
                      render={({ field }) => <Input {...field} color="primary" type="text" label={d.address_city} />}
                      name="address_city"
                      control={control}
                    />
                    <Controller
                      render={({ field }) => <Input {...field} color="primary" type="text" label={d.address_street} />}
                      name="address_street"
                      control={control}
                    />
                    <Controller
                      render={({ field }) => <Input {...field} color="primary" type="text" label={d.address_house} />}
                      name="address_house"
                      control={control}
                    />
                    <Controller
                      render={({ field }) => <Input {...field} color="primary" type="text" label={d.address_block} />}
                      name="address_block"
                      control={control}
                    />
                    <Controller
                      render={({ field }) => (
                        <Input {...field} color="primary" type="text" label={d.address_entrance} />
                      )}
                      name="address_entrance"
                      control={control}
                    />
                    <Controller
                      render={({ field }) => (
                        <Input {...field} color="primary" type="text" label={d.address_doorbell_code} />
                      )}
                      name="address_doorbell_code"
                      control={control}
                    />
                    <Controller
                      render={({ field }) => (
                        <Input {...field} color="primary" type="text" label={d.address_floor} />
                      )}
                      name="address_floor"
                      control={control}
                    />
                    <Controller
                      render={({ field }) => (
                        <Input {...field} color="primary" type="text" label={d.address_apartment} />
                      )}
                      name="address_apartment"
                      control={control}
                    />
                  </div>
                  <Controller
                    render={({ field }) => <Input {...field} color="primary" type="text" label={d.address_comment} />}
                    name="address_comment"
                    control={control}
                  />
                </>
              )}
            </div>
          </div>
          <Button type="submit" fullWidth color="success">
            {d.checkoutConfirmButton}
          </Button>
        </form>
      )}
    </div>
  );
};
