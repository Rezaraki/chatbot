 
import { useEffect, useRef } from 'react';
import { RelativeDays } from '../../../../shared/enums/RelativeDays';
import DateObject from 'react-date-object';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { useIntersection } from '../../../../shared/hooks/useIntersection';
import { addPrecedingTabs, addPrevTabs } from '../../../../state/reducer';
import { useAppDispatch } from '../../../../state/reduxHooks';
import { TabLabelProps } from '../../../../types/TabLabelProps';



export const TabLabel = ({id,isFirst ,isLast}: TabLabelProps) => {
    
  const dispatch = useAppDispatch()
  
    function nameLabels(id:number){

        if (RelativeDays.yesterday.id <=id && id <= RelativeDays.afterTomorrow.id){ 
          const relativeDaysValues = Object.values(RelativeDays)
          return relativeDaysValues.find(day=>day.id===id)!.label 
        }
    
        const PersianDate = new DateObject(
          {date: new Date(),
          calendar: persian, locale: persian_fa}
          );
    
        return PersianDate.add(id,'day').format("DD MMMM")
         
      }
      
      const ref =  useRef<HTMLDivElement>(null);
      const isIntersecting = useIntersection(ref)

      useEffect(() => {

      (  isFirst || isLast) && console.log('TabLabel isIntersecting',isIntersecting,id );
       
     
        if (isIntersecting&&isFirst) dispatch(addPrevTabs())
        if (isIntersecting&&isLast) dispatch(addPrecedingTabs())

      });

    return (
      <div className='tabLabel' ref={ref}>
          
            {nameLabels(id)}
        </div>
    );
};