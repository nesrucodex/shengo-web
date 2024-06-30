"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Title } from "@mantine/core";
import { SALES_VEHICLE_TABS_MAP } from "../_utils/constants";
import { CustomerContextProvider } from "../../_contexts/customer/customer-context";
import { VehicleContextProvider } from "../../_contexts/vehicle/vehicle-context";
import { CustomerFormProvider } from "../../_contexts/customer/customer-form-context";
import { CustomerOperationProvider } from "../../_contexts/customer/customer-operation-provider";
import CustomerIdentityRegisteration from "@/components/custom/customer-identity-registration";
import { VehicleFormProvider } from "../../_contexts/vehicle/vehicle-form-context";
import { VehicleOperationProvider } from "../../_contexts/vehicle/vehicle-operation-context";
import VehicleRegistration from "@/components/custom/vehicle-registration";
import ServiceRequest from "@/components/custom/service-request";
import Tabs from "@/components/custom/tabs";
import { useCarouselAPI } from "@/hooks/use-carouselAPI";

const Page = () => {
  const { defaultTabValue, current, api, setAPI, goBack, goToNext } =
    useCarouselAPI({
      tabsMap: SALES_VEHICLE_TABS_MAP,
    });

  return (
    <main className="container">
      <Title order={1} className="my-5">
        Vehicle 
      </Title>
      <CustomerContextProvider>
        <VehicleContextProvider>
          <section>
            <section defaultValue={defaultTabValue}>
              <Tabs
                carouselApi={api}
                current={current}
                tabsMap={SALES_VEHICLE_TABS_MAP}
              />

              <Carousel
                setApi={setAPI}
                opts={{
                  watchDrag: false,
                  align: "start",
                }}
                className="w-full"
              >
                <CarouselContent>
                  <CarouselItem>
                    <CustomerFormProvider>
                      <CustomerOperationProvider
                        type={SALES_VEHICLE_TABS_MAP.saler}
                        carouselAction={{ goBack, goToNext }}
                      >
                        <CustomerIdentityRegisteration />
                      </CustomerOperationProvider>
                    </CustomerFormProvider>
                  </CarouselItem>
                  <CarouselItem>
                    <CustomerFormProvider>
                      <CustomerOperationProvider
                        type={SALES_VEHICLE_TABS_MAP.buyer}
                        carouselAction={{ goBack, goToNext }}
                      >
                        <CustomerIdentityRegisteration />
                      </CustomerOperationProvider>
                    </CustomerFormProvider>
                  </CarouselItem>
                  <CarouselItem>
                    <VehicleFormProvider>
                      <VehicleOperationProvider
                        carouselAction={{ goBack, goToNext }}
                      >
                        <VehicleRegistration />
                      </VehicleOperationProvider>
                    </VehicleFormProvider>
                  </CarouselItem>
                  <CarouselItem>
                    <CustomerFormProvider>
                      <CustomerOperationProvider
                        type={SALES_VEHICLE_TABS_MAP.withness}
                        carouselAction={{ goBack, goToNext }}
                      >
                        <CustomerIdentityRegisteration />
                      </CustomerOperationProvider>
                    </CustomerFormProvider>
                  </CarouselItem>
                  <CarouselItem>
                    <ServiceRequest />
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </section>
          </section>
        </VehicleContextProvider>
      </CustomerContextProvider>
    </main>
  );
};

export default Page;
