import Image from "next/image";

import { Badge, Typography } from "@posme-id/ui";
import { cx, numberFormat } from "@zal-kit/utils";

interface MenuProps {
  image?: string;
  isPackage?: boolean;
  onClick: () => void;
  price: number;
  title: string;
}

const EMPTY_IMAGE = "/images/dummies/empty-image.svg";

const Menu = ({ image, isPackage, onClick, price, title }: MenuProps) => {
  const menuImage = image ?? EMPTY_IMAGE;
  const hasImage = Boolean(image);

  return (
    <div
      className="
        flex h-auto w-full cursor-pointer flex-col
        overflow-hidden rounded-lg border
        bg-white active:scale-[0.97]
        sm:h-63.5
      "
      onClick={onClick}
    >
      <div className="relative h-37 w-full sm:h-37">
        <Image
          className={cx(
            hasImage ? "object-cover" : "object-contain mx-auto w-20!",
          )}
          sizes="(max-width: 640px) 100vw,
                 (max-width: 1024px) 50vw,
                 33vw"
          alt={title}
          src={menuImage}
          fill
          priority
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-3">
        <Typography
          className="line-clamp-2 sm:line-clamp-1"
          variant="paragraphSemiBold"
        >
          {title}
        </Typography>
        <div className="flex flex-col gap-2">
          <Typography variant="h6">{numberFormat(price)}</Typography>
          {isPackage && (
            <Badge
              color="danger"
              label="Paket"
              size="small"
              variant="contained"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
