import React from "react";

import Image from "next/image";

import Button from "./button";

interface TemplateCardProps {
  desc: string;
  image?: string;
  onSelect?: () => void;
  title: string;
}

const TemplateCard = ({ desc, image, onSelect, title }: TemplateCardProps) => {
  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-sm border p-5 hover:shadow-md transition">
      {/* Preview */}
      <div className="h-32 bg-gray-200 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
        {image ? (
          <Image
            alt={title}
            className="w-full h-full object-cover"
            height={0}
            sizes="100vw"
            src={image}
            width={0}
          />
        ) : (
          <span className="text-gray-400 text-sm">Preview</span>
        )}
      </div>

      {/* Content */}
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-sm text-gray-500 mb-4">{desc}</p>

      {/* Action */}
      <Button className="w-full mt-auto" onClick={onSelect}>
        Use Template
      </Button>
    </div>
  );
};

export default TemplateCard;
