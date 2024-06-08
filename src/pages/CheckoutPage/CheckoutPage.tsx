import { zodResolver } from '@hookform/resolvers/zod';
import { useDictionary } from '@hooks';
import { Button, Input, Select, SelectItem } from '@nextui-org/react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { pickupPointsData } from './model/pickup-points-data';
import { CheckoutSchema, type CheckoutSchemaType } from './model/schema';

export const CheckoutPage = () => {
  const d = useDictionary();

  const { handleSubmit, control } = useForm<CheckoutSchemaType>({
    defaultValues: {
      name: '',
      phone: '',
      delivery_type: '',
      address_pickup: '',
      address_apartment: '',
      address_city: '',
      address_comment: '',
      address_doorbell_code: '',
      address_entrance: '',
      address_house: '',
      address_street: ''
    },
    resolver: zodResolver(CheckoutSchema),
  });

  const deliveryType = useWatch({
    control,
    name: 'delivery_type',
  });

  const submitHandler = (data: CheckoutSchemaType) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="mb-10">{d.checkoutPageTitle}</h1>
      <form className="space-y-10" onSubmit={handleSubmit(submitHandler)}>
        <div className="space-y-5">
          <h3 className="text-xl">{d.aboutBuyerTitle}</h3>
          <div className="space-y-5">
            <Controller
              render={({ field }) => <Input {...field} type="text" label={d.buyerNameInputLabel} isRequired />}
              name="name"
              control={control}
            />
            <Controller
              render={({ field }) => <Input {...field} type="text" label={d.buyerPhoneInputLabel} isRequired />}
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
                <Select label={d.deliveryType} onChange={field.onChange} selectedKeys={field.value} isRequired>
                  <SelectItem key={d.deliveryTypeSelfPickup}>{d.deliveryTypeSelfPickup}</SelectItem>
                  <SelectItem key={d.deliveryTypeCourier}>{d.deliveryTypeCourier}</SelectItem>
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
                    label={d.selectPickupPoint}
                    onChange={field.onChange}
                    selectedKeys={field.value}
                    isRequired
                  >
                    {(item) => <SelectItem key={item.id}>{item.address}</SelectItem>}
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
                    render={({ field }) => <Input {...field} type="text" label={d.address_city} />}
                    name="address_city"
                    control={control}
                  />
                  <Controller
                    render={({ field }) => <Input {...field} type="text" label={d.address_street} />}
                    name="address_street"
                    control={control}
                  />
                  <Controller
                    render={({ field }) => <Input {...field} type="text" label={d.address_house} />}
                    name="address_house"
                    control={control}
                  />
                  <Controller
                    render={({ field }) => <Input {...field} type="text" label={d.address_entrance} />}
                    name="address_entrance"
                    control={control}
                  />
                  <Controller
                    render={({ field }) => <Input {...field} type="text" label={d.address_apartment} />}
                    name="address_apartment"
                    control={control}
                  />
                  <Controller
                    render={({ field }) => <Input {...field} type="text" label={d.address_doorbell_code} />}
                    name="address_doorbell_code"
                    control={control}
                  />
                </div>
                <Controller
                  render={({ field }) => <Input {...field} type="text" label={d.address_comment} />}
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
    </div>
  );
};
