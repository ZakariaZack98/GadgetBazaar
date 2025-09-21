import { CategoryType } from '@/types/category';
import React from 'react';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';

interface CategoryRadioPropsType {
  categoryList: CategoryType[];
  onSelectCategory: React.Dispatch<React.SetStateAction<CategoryType | null>>
}

const CategoryRadio = ({ categoryList, onSelectCategory }: CategoryRadioPropsType) => {
  return (
    <div>
      <div className="label2 mb-4">CATEGORY</div>
      <RadioGroup
        onValueChange={(value: string) => {
          const selectedCategory = categoryList.find(category => category.name === value);
          if (selectedCategory) {
            onSelectCategory(selectedCategory);
          }
        }}
        defaultValue={categoryList[0]?.name}
      >
        {categoryList.map(category => (
          <div className="flex items-center space-x-2" key={category.name}>
            <div className='relative flex items-center justify-center'>
              <RadioGroupItem
                value={category.name}
                id={category.name}
                className='h-5 w-5 border-2 border-gray-300 rounded-full data-[state=checked]:bg-accentOrange' // Corrected styles here
              >
                <div
                  className='h-2.5 w-2.5 rounded-full bg-transparent transition-colors duration-200 data-[state=checked]:bg-white border-2 border-white' // Corrected styles here
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-transparent transition-colors duration-200 data=[state=checked]:bg-white"></div>
                </div>
              </RadioGroupItem>
            </div>
            <Label htmlFor={category.name}>{category.name}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default CategoryRadio;