import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const QuickActionItem = ({
  icon: Icon,
  badgeCount,
  ariaLabel,
  linkTo,
  className,
}) => {
  const iconElement = <Icon className={className} />;

  return (
    <Link
      className="flex items-center flex-col justify-center"
      to={linkTo || "#"}
    >
      <Button shape="circle" aria-label={ariaLabel}>
        {badgeCount ? (
          <Badge count={badgeCount}>{iconElement}</Badge>
        ) : (
          <div>
            <div>{iconElement}</div>
          </div>
        )}
      </Button>
      <div>{ariaLabel}</div>
    </Link>
  );
};

QuickActionItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  badgeCount: PropTypes.number,
  ariaLabel: PropTypes.string.isRequired,
  className: PropTypes.string,
  linkTo: PropTypes.string,
};

export default React.memo(QuickActionItem);
